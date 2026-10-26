(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const CATS = window.CATEGORIES;
  const screens = ["home", "setup", "count", "play", "result"];

  // ---------- Almacenamiento seguro ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };

  const settings = Object.assign({ time: 60, ctrl: "tilt", fx: true }, store.get("settings", {}));
  const best = store.get("best", {});

  let cat = null;
  let run = null; // estado de la ronda

  // ---------- Pantallas ----------
  function show(name) {
    for (const s of screens) $("screen-" + s).classList.toggle("active", s === name);
  }

  // ---------- Inicio ----------
  function renderCats() {
    $("cats").innerHTML = "";
    for (const c of CATS) {
      const b = document.createElement("button");
      b.className = "cat";
      b.style.setProperty("--c1", c.color[0]);
      b.style.setProperty("--c2", c.color[1]);
      const rec = best[c.id];
      b.innerHTML = `<span class="e">${c.emoji}</span><span><span class="n">${c.nombre}</span><br><span class="k">${rec ? "Récord: " + rec : c.palabras.length + " cartas"}</span></span>`;
      b.addEventListener("click", () => openSetup(c));
      $("cats").appendChild(b);
    }
  }

  function openSetup(c) {
    cat = c;
    $("setup-emoji").textContent = c.emoji;
    $("setup-title").textContent = c.nombre;
    $("setup-count").textContent = c.palabras.length + " cartas";
    $("screen-play").style.setProperty("--c1", c.color[0]);
    $("screen-play").style.setProperty("--c2", c.color[1]);
    syncSegs();
    show("setup");
  }

  function syncSegs() {
    const map = { "seg-time": String(settings.time), "seg-ctrl": settings.ctrl, "seg-fx": settings.fx ? "1" : "0" };
    for (const [id, val] of Object.entries(map))
      for (const b of $(id).children) b.classList.toggle("on", b.dataset.v === val);
    $("tilt-tip").style.display = settings.ctrl === "tilt" ? "" : "none";
  }

  function bindSeg(id, key, parse) {
    $(id).addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      settings[key] = parse(b.dataset.v);
      store.set("settings", settings);
      syncSegs();
    });
  }
  bindSeg("seg-time", "time", Number);
  bindSeg("seg-ctrl", "ctrl", String);
  bindSeg("seg-fx", "fx", (v) => v === "1");

  // ---------- Mazo (sin repetir hasta agotar) ----------
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function nextCard() {
    const key = "deck:" + cat.id;
    let deck = store.get(key, []);
    deck = deck.filter((i) => i < cat.palabras.length);
    if (!deck.length) deck = shuffle(cat.palabras.map((_, i) => i));
    const idx = deck.pop();
    store.set(key, deck);
    return cat.palabras[idx];
  }

  // ---------- Efectos ----------
  let actx;
  function beep(freq, dur = 0.12, type = "sine", vol = 0.2) {
    if (!settings.fx) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === "suspended") actx.resume();
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = type; o.frequency.value = freq;
      g.gain.setValueAtTime(vol, actx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + dur);
      o.connect(g).connect(actx.destination);
      o.start(); o.stop(actx.currentTime + dur);
    } catch {}
  }
  const buzz = (p) => { if (settings.fx && navigator.vibrate) navigator.vibrate(p); };
  const sfx = {
    ok() { beep(660, .1); setTimeout(() => beep(990, .16), 90); buzz(60); },
    pass() { beep(220, .22, "sawtooth", .12); buzz([30, 40, 30]); },
    tick() { beep(880, .08, "square", .08); },
    start() { beep(1175, .3, "triangle"); buzz(100); },
    end() { beep(440, .15, "triangle"); setTimeout(() => beep(330, .15, "triangle"), 160); setTimeout(() => beep(220, .4, "triangle"), 320); buzz([200, 80, 200]); },
  };

  // ---------- Pantalla encendida ----------
  let wake = null;
  async function keepAwake(on) {
    try {
      if (on && "wakeLock" in navigator) wake = await navigator.wakeLock.request("screen");
      else if (wake) { await wake.release(); wake = null; }
    } catch {}
  }
  document.addEventListener("visibilitychange", () => { if (run && !document.hidden) keepAwake(true); });

  // ---------- Sensores ----------
  const T_ON = 0.55, T_OFF = 0.3;
  let armed = false, gotSensor = false, sensorTimer = 0;

  async function askMotionPermission() {
    const D = window.DeviceOrientationEvent;
    if (D && typeof D.requestPermission === "function") {
      try { return (await D.requestPermission()) === "granted"; } catch { return false; }
    }
    return "DeviceOrientationEvent" in window;
  }

  function onOrient(e) {
    if (e.beta == null || e.gamma == null) return;
    gotSensor = true;
    if (!run || run.phase !== "play") return;
    const b = e.beta * Math.PI / 180, g = e.gamma * Math.PI / 180;
    // Componente vertical de la normal de la pantalla: >0 mira al techo, <0 mira al piso.
    const nz = Math.cos(b) * Math.cos(g);
    if (!armed) { if (Math.abs(nz) < T_OFF) armed = true; return; }
    if (nz < -T_ON) { armed = false; answer(true); }
    else if (nz > T_ON) { armed = false; answer(false); }
  }

  // ---------- Ronda ----------
  async function startGame() {
    let useTilt = settings.ctrl === "tilt";
    if (useTilt) {
      const ok = await askMotionPermission();
      if (!ok) useTilt = false;
    }
    try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); actx.resume(); } catch {}
    keepAwake(true);
    try { if (!document.fullscreenElement) await document.documentElement.requestFullscreen({ navigationUI: "hide" }); } catch {}
    try { await screen.orientation.lock("landscape"); } catch {}

    run = { phase: "count", tilt: useTilt, ok: 0, log: [], card: null, left: settings.time, timer: 0 };
    $("tapzones").classList.toggle("on", !useTilt);
    armed = false; gotSensor = false;
    if (useTilt) window.addEventListener("deviceorientation", onOrient);

    show("count");
    let n = 3;
    const step = () => {
      if (!run) return;
      if (n === 0) return beginPlay();
      $("count-num").textContent = n;
      $("count-num").style.animation = "none"; void $("count-num").offsetWidth; $("count-num").style.animation = "";
      sfx.tick();
      n--;
      run.timer = setTimeout(step, 1000);
    };
    step();
  }

  function beginPlay() {
    run.phase = "play";
    sfx.start();
    show("play");
    $("score").textContent = "0";
    $("timer").textContent = run.left;
    $("bar").style.transition = "none"; $("bar").style.transform = "scaleX(1)";
    void $("bar").offsetWidth; $("bar").style.transition = "";
    showCard();
    run.endAt = Date.now() + run.left * 1000;
    run.timer = setInterval(tick, 250);
    // Si no llegan eventos del sensor, caer a modo toque.
    if (run.tilt) sensorTimer = setTimeout(() => { if (run && !gotSensor) fallbackToTap(); }, 1500);
    $("bar").style.transition = `transform ${settings.time}s linear`;
    $("bar").style.transform = "scaleX(0)";
  }

  function fallbackToTap() {
    run.tilt = false;
    window.removeEventListener("deviceorientation", onOrient);
    $("tapzones").classList.add("on");
  }

  let lastShown = -1;
  function tick() {
    const left = Math.max(0, Math.ceil((run.endAt - Date.now()) / 1000));
    if (left !== lastShown) {
      lastShown = left;
      $("timer").textContent = left;
      if (left <= 5 && left > 0) sfx.tick();
    }
    if (left <= 0) finish();
  }

  function showCard() {
    run.card = nextCard();
    $("word").textContent = run.card;
  }

  let locked = false;
  function answer(correct) {
    if (!run || run.phase !== "play" || locked) return;
    locked = true;
    run.log.push({ w: run.card, ok: correct });
    if (correct) { run.ok++; $("score").textContent = run.ok; sfx.ok(); } else sfx.pass();
    const sc = $("screen-play");
    $("flash").textContent = correct ? "¡Bien!" : "Pasa";
    $("flash").classList.add("show");
    sc.classList.add(correct ? "ok" : "pass");
    setTimeout(() => {
      sc.classList.remove("ok", "pass");
      $("flash").classList.remove("show");
      if (run && run.phase === "play") showCard();
      locked = false;
      armed = false; // exigir volver a la posición neutra
    }, 750);
  }

  function cleanup() {
    if (run) { clearTimeout(run.timer); clearInterval(run.timer); }
    clearTimeout(sensorTimer);
    window.removeEventListener("deviceorientation", onOrient);
    keepAwake(false);
    try { screen.orientation.unlock(); } catch {}
    try { if (document.fullscreenElement) document.exitFullscreen(); } catch {}
    $("screen-play").classList.remove("ok", "pass");
    $("flash").classList.remove("show");
    locked = false; lastShown = -1;
  }

  function finish() {
    const r = run;
    r.phase = "done";
    sfx.end();
    cleanup();
    run = null;
    const score = r.ok;
    const prev = best[cat.id] || 0;
    const record = score > prev;
    if (record) { best[cat.id] = score; store.set("best", best); }
    $("result-score").textContent = score;
    $("result-msg").textContent = record && score > 0 ? "¡Nuevo récord! 🏆" : msgFor(score);
    $("result-best").textContent = "Récord en " + cat.nombre + ": " + best[cat.id];
    $("result-list").innerHTML = r.log.map((x) => `<li class="${x.ok ? "ok" : "pass"}"><span>${x.w.replace(/</g, "&lt;")}</span><span></span></li>`).join("")
      || '<li class="pass"><span>No jugaste ninguna carta</span><span></span></li>';
    renderCats();
    show("result");
  }

  function msgFor(s) {
    if (s === 0) return "Uh, ni una... 😅";
    if (s < 4) return "Flojito, pero va 👍";
    if (s < 8) return "¡Bien ahí, crack!";
    if (s < 12) return "¡Qué máquina! 🔥";
    return "¡Sos un fenómeno! 🤯";
  }

  function quit() {
    if (run) { run.phase = "done"; }
    cleanup();
    run = null;
    show("home");
  }

  // ---------- Eventos ----------
  $("btn-start").addEventListener("click", startGame);
  $("setup-back").addEventListener("click", () => show("home"));
  $("tap-ok").addEventListener("click", () => answer(true));
  $("tap-pass").addEventListener("click", () => answer(false));
  $("btn-quit").addEventListener("click", quit);
  $("btn-again").addEventListener("click", startGame);
  $("btn-menu").addEventListener("click", () => show("home"));
  $("btn-how").addEventListener("click", () => $("dlg-how").showModal());
  $("how-close").addEventListener("click", () => $("dlg-how").close());
  document.addEventListener("keydown", (e) => {
    if (!run || run.phase !== "play") return;
    if (e.key === "ArrowDown" || e.key === "Enter") answer(true);
    if (e.key === "ArrowUp" || e.key === " ") answer(false);
  });

  // ---------- PWA / offline ----------
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").then(() => navigator.serviceWorker.ready)
        .then(() => { $("offline-badge").hidden = false; }).catch(() => {});
    });
  }

  renderCats();
})();
