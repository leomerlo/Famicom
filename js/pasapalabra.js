// Rosco de Pasapalabra. Formato: Letra|E (empieza por) o C (contiene)|respuesta|definición
(function () {
  const RAW = `
A|E|alfajor|Golosina de dos tapas redondas rellenas de dulce de leche, típica de Argentina.
A|E|aconcagua|La montaña más alta de América, ubicada en Mendoza.
A|E|asado|Comida típica argentina que se cocina a las brasas en la parrilla.
A|E|anaconda|Serpiente enorme de la selva que atrapa a sus presas enroscándose.
A|E|avestruz|La mayor de las aves vivas: corre muy rápido pero no puede volar.
B|E|bondi|En lunfardo, el colectivo.
B|E|bombilla|Pajita de metal con la que se toma el mate.
B|E|bandoneón|Instrumento de fuelle indispensable en el tango.
B|E|ballena|Mamífero marino gigante que se avista en Península Valdés.
B|E|brújula|Instrumento con una aguja imantada que siempre señala el norte.
C|E|cataratas|Caídas de agua enormes; las del Iguazú son las más famosas de Argentina.
C|E|chimichurri|Salsa de ajo, perejil, ají molido y aceite que acompaña al asado.
C|E|carnaval|Fiesta popular de disfraces y comparsas previa a la Cuaresma.
C|E|cóndor|Ave voladora gigante, símbolo de la cordillera de los Andes.
C|E|chacarera|Danza folclórica argentina que se baila en pareja, con zapateo.
D|E|dinosaurio|Reptil gigante que dominó la Tierra hace millones de años.
D|E|dulce de leche|Postre cremoso de leche y azúcar, orgullo nacional.
D|E|delfín|Mamífero marino muy inteligente que se comunica con chasquidos.
D|E|diccionario|Libro que reúne y explica las palabras de un idioma.
D|E|desierto|Zona muy seca, con poca lluvia y poca vegetación.
E|E|empanada|Masa rellena que se hornea o se fríe; la hay de carne, humita o jamón y queso.
E|E|elefante|El animal terrestre más grande, con trompa y colmillos.
E|E|eclipse|Fenómeno en el que un astro oculta a otro, como la Luna al Sol.
E|E|esqueleto|Conjunto de huesos que sostiene el cuerpo.
E|E|everest|La montaña más alta del mundo, en el Himalaya.
F|E|fernet|Bebida amarga de hierbas que los cordobeses toman con cola.
F|E|fútbol|Deporte más popular del país, con once jugadores por equipo.
F|E|fainá|Masa de harina de garbanzos que se come sobre la pizza.
F|E|faro|Torre con una luz en la costa que guía a los barcos.
F|E|fósforo|Palito con cabeza que se enciende al frotarlo.
G|E|gaucho|Jinete de la pampa, protagonista del Martín Fierro.
G|E|gol|Tanto que se consigue cuando la pelota cruza la línea del arco.
G|E|guitarra|Instrumento de seis cuerdas que se rasguea.
G|E|glaciar|Gran masa de hielo; el Perito Moreno es el más famoso de Santa Cruz.
G|E|girasol|Planta de flor amarilla que sigue al sol; de sus semillas sale aceite.
H|E|helado|Postre frío que se sirve en cucurucho o en pote.
H|E|hornero|Ave nacional argentina que construye su nido de barro.
H|E|hielo|Agua en estado sólido.
H|E|hormiga|Insecto diminuto y trabajador que vive en colonias.
H|E|hospital|Lugar donde se atiende y se interna a los enfermos.
I|E|iguazú|Río y parque nacional de Misiones, famoso por sus cataratas.
I|E|isla|Porción de tierra rodeada de agua por todos lados.
I|E|imán|Objeto que atrae al hierro.
I|E|invierno|La estación más fría del año.
I|E|impresora|Máquina que pasa al papel lo que hay en la computadora.
J|E|jirafa|Animal de cuello larguísimo que come hojas de los árboles altos.
J|E|jujuy|Provincia del noroeste donde está la Quebrada de Humahuaca.
J|E|jabón|Producto que, con agua, sirve para lavarse y limpiar.
J|E|jabalí|Cerdo salvaje de colmillos grandes.
J|E|jugo|Líquido que se exprime de las frutas.
L|E|luna|Satélite natural de la Tierra.
L|E|lionel|Nombre de pila del capitán campeón del mundo en Qatar 2022.
L|E|lapicera|Instrumento con tinta para escribir; también se le dice birome.
L|E|llama|Animal andino de cuello largo y lana, usado para cargar.
L|E|lunfardo|Jerga popular porteña nacida entre inmigrantes, muy presente en el tango.
M|E|mate|Infusión de yerba que se comparte en rueda.
M|E|malvinas|Archipiélago del Atlántico Sur reclamado por Argentina.
M|E|milanesa|Bife empanado; a la napolitana lleva jamón, salsa y queso.
M|E|mendoza|Provincia famosa por su vino Malbec.
M|E|murciélago|Único mamífero que puede volar.
N|E|napoleón|Emperador francés famoso por su sombrero bicornio.
N|E|nieve|Agua helada que cae en copos.
N|E|neuquén|Provincia patagónica donde queda Vaca Muerta.
N|E|nube|Masa de vapor de agua que flota en el cielo.
N|E|naranja|Fruta cítrica y redonda de la que se exprime jugo.
Ñ|E|ñoquis|Pasta de papa que en Argentina se come el 29 de cada mes.
Ñ|E|ñandú|Ave corredora sudamericana parecida al avestruz.
Ñ|C|niño|Persona de pocos años.
Ñ|C|montaña|Gran elevación natural del terreno.
Ñ|C|cuñado|El hermano de tu pareja.
O|E|obelisco|Monumento emblemático de Buenos Aires, en la Avenida 9 de Julio.
O|E|oveja|Animal que da lana y vive en rebaños.
O|E|oso|Mamífero grande y peludo; el polar vive en el Ártico.
O|E|orquesta|Conjunto grande de músicos que tocan juntos.
O|E|océano|Gran extensión de agua salada, como el Pacífico o el Atlántico.
P|E|pampa|Llanura extensa y fértil del centro de Argentina.
P|E|patagonia|Región austral de viento, estepa y glaciares.
P|E|pizza|Masa con salsa y queso nacida en Italia, muy querida en Buenos Aires.
P|E|pingüino|Ave que no vuela pero nada muy bien y camina como con frac.
P|E|papa|Tubérculo de origen andino que se come frito, hervido o en puré.
Q|E|quilmes|Cerveza argentina y también ciudad bonaerense.
Q|E|quirquincho|Nombre andino del armadillo.
Q|E|queso|Alimento lácteo que se hace cuajando la leche.
Q|E|quebracho|Árbol del Chaco de madera durísima.
Q|E|quincho|Construcción abierta del jardín donde se hacen los asados.
R|E|river|Club de Núñez cuyo estadio es el Monumental.
R|E|rosario|Ciudad santafesina, cuna de la bandera.
R|E|rayuela|Novela de Julio Cortázar y también juego de saltar en casilleros.
R|E|remera|Prenda de algodón de mangas cortas.
R|E|ricota|Queso blando y blanco, relleno clásico de ravioles.
S|E|sol|Estrella central de nuestro sistema.
S|E|salta|Provincia del noroeste a la que llaman "la linda".
S|E|subte|Transporte que va bajo tierra en Buenos Aires, con líneas A, B, C, D, E y H.
S|E|sandía|Fruta grande, verde por fuera y roja con semillas negras por dentro.
S|E|san martín|El Libertador que cruzó los Andes.
T|E|tango|Música y baile rioplatense, Patrimonio de la Humanidad.
T|E|tigre|El felino rayado más grande del mundo.
T|E|tucumán|Provincia chica donde se declaró la Independencia en 1816.
T|E|teléfono|Aparato que sirve para hablar con alguien que está lejos.
T|E|tren|Transporte que circula sobre rieles.
U|E|ushuaia|Ciudad más austral del mundo, en Tierra del Fuego.
U|E|uva|Fruta con la que se hace el vino.
U|E|universo|Todo lo que existe: planetas, estrellas y galaxias.
U|E|uruguay|País vecino, del otro lado del Río de la Plata.
U|E|unicornio|Animal mitológico con un cuerno en la frente.
V|E|vino|Bebida de uva fermentada.
V|E|volcán|Montaña que puede lanzar lava y ceniza.
V|E|vaca|Animal que da leche y carne.
V|E|velero|Barco que se mueve con el viento en sus velas.
V|E|violín|Instrumento de cuerdas que se toca con un arco.
X|C|taxi|Auto con reloj que mide el viaje y que se para con la mano en la calle.
X|C|examen|Prueba para evaluar lo que sabés.
X|C|oxígeno|Gas que respiramos para vivir.
X|C|éxito|Resultado muy bueno de algo que se emprende.
X|C|boxeo|Deporte de combate que se practica con guantes en un ring.
Y|E|yerba|Hojas secas y molidas con las que se prepara el mate.
Y|E|yacaré|Reptil del litoral parecido al cocodrilo.
Y|E|yate|Barco de lujo para pasear.
Y|E|yoga|Disciplina de posturas, respiración y meditación.
Y|E|yaguareté|Gran felino manchado de la selva misionera.
Z|E|zorro|Animal astuto de cola peluda y hocico puntiagudo.
Z|E|zapato|Calzado que cubre el pie.
Z|E|zanahoria|Hortaliza naranja, la preferida de los conejos.
Z|E|zapallo|Verdura grande y naranja; se pone en el locro.
Z|E|zoológico|Lugar donde se exhiben animales.
`;
  const LETTERS = "ABCDEFGHIJLMNÑOPQRSTUVXYZ".split("");
  const R = {};
  for (const l of LETTERS) R[l] = [];
  for (const line of RAW.split("\n")) {
    const p = line.split("|");
    if (p.length < 4) continue;
    R[p[0]].push({ t: p[1], a: p[2], d: p.slice(3).join("|") });
  }
  window.ROSCO = R;
  window.ROSCO_LETTERS = LETTERS;
})();
