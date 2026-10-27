// Palabras prohibidas ("No digas"): 3 por carta. Formato: Carta|prohibida, prohibida, prohibida
(function () {
  const RAW = `
Asado|parrilla, carne, fuego
Empanadas|masa, relleno, horno
Milanesa a la napolitana|jamón, tomate, queso
Choripán|chorizo, pan, chimichurri
Locro|maíz, 25 de mayo, guiso
Dulce de leche|vaca, postre, untar
Alfajor|chocolate, tapas, Havanna
Mate cocido|yerba, leche, merienda
Fainá|pizza, garbanzos, harina
Pizza de muzzarella|queso, masa, horno
Fugazzeta|cebolla, queso, pizza
Provoleta|queso, parrilla, derretir
Vacío|asado, corte, vaca
Entraña|asado, corte, fina
Morcilla|sangre, embutido, parrilla
Chinchulines|intestino, parrilla, crocantes
Molleja|achura, parrilla, glándula
Tira de asado|costillas, hueso, parrilla
Bondiola|cerdo, sándwich, carne
Sándwich de miga|triple, jamón, queso
Medialunas|facturas, café, manteca
Facturas|panadería, dulce, medialunas
Churros|dulce de leche, fritos, azúcar
Tortas fritas|lluvia, mate, grasa
Ñoquis del 29|plata, papa, cada mes
Canelones|rellenos, tuco, pasta
Sorrentinos|pasta, relleno, jamón
Ravioles|pasta, relleno, verdura
Matambre a la pizza|salsa, queso, vaca
Revuelto gramajo|huevo, papas, jamón
Humita|choclo, cremoso, norte
Tamales|choclo, hoja, norte
Carbonada|zapallo, choclo, guiso
Puchero|verduras, carne, caldo
Guiso de lentejas|legumbre, invierno, cuchara
Pastel de papa|carne picada, puré, horno
Tarta de jamón y queso|masa, huevo, horno
Pionono|rollo, dulce de leche, relleno
Lemon pie|limón, merengue, tarta
Flan con dulce de leche|huevo, crema, caramelo
Panqueque con dulce de leche|crepe, doblado, postre
Vigilante|queso, dulce, batata
Helado de dulce de leche|frío, cucurucho, heladería
Chocotorta|galletitas, chocolate, queso crema
Alfajor de maicena|tapas, coco, dulce de leche
Pastafrola|membrillo, tarta, masa
Budín de pan|sobras, caramelo, postre
Mondongo|panza, guiso, vaca
Hamburguesa|carne, pan, McDonald's
Papas fritas|aceite, bastones, sal
Sushi|arroz, pescado, japonés
Tacos|México, tortilla, picante
Pochoclo|maíz, cine, sal
Chipá|queso, mandioca, Paraguay
Sopa paraguaya|maíz, queso, horno
Lomito completo|carne, huevo, sándwich
Tostado de jamón y queso|pan, plancha, café
Pebete|pan, sándwich, chico
Choclo|maíz, mazorca, amarillo
Zapallo anco|verdura, naranja, puré
Bife de chorizo|asado, corte, carne
Ojo de bife|corte, carne, parrilla
Colita de cuadril|asado, corte, vaca
Fideos con tuco|pasta, salsa, tomate
Polenta|maíz, harina, salsa
Arroz con leche|postre, canela, cremoso
Mermelada|fruta, dulce, tostada
Mantecol|maní, dulce, barra
Garrapiñada|maní, azúcar, caramelo
Milanesa con papas fritas|carne, empanada, plato
Sánguche de milanesa|pan, carne, lechuga
Hot dog|pancho, salchicha, pan
Susana Giménez|conductora, teléfono, diva
Mirtha Legrand|almuerzo, Chiquita, mesa
Moria Casán|One, diosa, vedette
Wanda Nara|Icardi, empresaria, Maxi
Mauro Icardi|Wanda, fútbol, delantero
Marcelo Tinelli|Showmatch, bailando, tele
Guillermo Francella|actor, humor, Casados con hijos
Ricardo Darín|actor, Oscar, cine
Lali Espósito|cantante, Disciplina, Casi Ángeles
Tini Stoessel|cantante, Violetta, Messi
Fito Páez|rosarino, rock, Cómo ser
Charly García|rock, Sui Generis, piano
Luis Alberto Spinetta|Flaco, Almendra, rock
Gustavo Cerati|Soda Stereo, guitarra, rock
Soda Stereo|Cerati, banda, rock
Los Redondos|Indio Solari, recital, rock
Divididos|Ricardo Mollo, rock, banda
Cacho Castaña|cantante, tango, bohemio
Nicki Nicole|trap, cantante, rosarina
Duki|trap, Buenos Aires, cantante
Bizarrap|productor, sesión, música
Emilia Mernes|cantante, pop, Duki
María Becerra|cantante, reggaetón, joven
Cazzu|trap, cantante, Nodal
Jorge Rial|conductor, chimentos, tele
Yanina Latorre|Diego, panelista, chimentos
Fátima Florez|humorista, imitadora, Milei
Nito Artaza|humorista, senador, teatro
Gerardo Sofovich|productor, Polémica, tele
Ángel de Brito|conductor, LAM, chimentos
Pampita|modelo, Vicuña, Carolina
Nicole Neumann|modelo, Cubero, Fabio
China Suárez|actriz, Vicuña, Rebelde Way
Benjamín Vicuña|actor, chileno, Pampita
Pico Mónaco|chef, actor, Casados con hijos
Jorge Lanata|periodista, Periodismo para todos, Clarín
Nacho Goano|periodista, Radio Mitre, Pampita
Diego Capusotto|humorista, Peter, Bombita
Peter Capusotto|videos, Diego, humor
Adrián Suar|productor, Pol-ka, actor
Florencia Peña|actriz, comedia, Casados con hijos
Araceli González|actriz, Fabián, modelo
Verónica Ojeda|Maradona, Gianinna, mamá
Flor de la V|trans, actriz, conductora
Georgina Barbarossa|conductora, tele, mujer
Carmen Barbieri|vedette, Fede, teatro
Graciela Alfano|modelo, vedette, mujer
Oscar Mediavilla|periodista, Chiquita, humor
Julián Weich|conductor, tele, programa
Mario Pergolini|Caiga quien caiga, Vorterix, conductor
Alejandro Fantino|conductor, Neura, periodista
Santiago del Moro|Gran Hermano, conductor, tele
Iván de Pineda|conductor, MasterChef, modelo
Juana Viale|actriz, Mirtha, conductora
Evangelina Anderson|modelo, Demichelis, Marto
Zaira Nara|modelo, Wanda, hermana
Luciana Salazar|modelo, cirugía, Primer Cuerpo
Charlotte Caniggia|Mariana, Alex, tele
Mariana Fabbiani|conductora, Nicolás, tele
Dady Brieva|humorista, Peter, Los Gonzalez
Pablo Echarri|actor, Nancy, política
Natalia Oreiro|actriz, uruguaya, Muñeca
Ricky Martin|cantante, puertorriqueño, Livin
Cris Morena|productora, Rebelde Way, Floricienta
Daddy Yankee|reggaetón, Gasolina, puertorriqueño
Alberto Olmedo|humor, Porcel, Manosanta
Jorge Porcel|humor, Olmedo, gordo
Tato Bores|humorista, tele, Mapa
Roberto Galán|Yo me quiero casar, tele, programa
Sebastián Yatra|colombiano, cantante, pop
Ángela Torres|cantante, Lali, tele
Lionel Messi|fútbol, Mundial, Rosario
Titanic|barco, hielo, Jack
El Padrino|mafia, Corleone, Marlon Brando
Toy Story|juguetes, Woody, Buzz
Volver al futuro|DeLorean, Marty, tiempo
Jurassic Park|dinosaurios, parque, ADN
El Rey León|Simba, Mufasa, Hakuna Matata
Shrek|ogro, burro, pantano
Matrix|Neo, pastilla, simulación
Harry Potter|mago, Hogwarts, varita
El Señor de los Anillos|Frodo, Mordor, Gandalf
Star Wars|Jedi, Darth Vader, galaxia
Avatar|azules, Pandora, Cameron
Rápidos y Furiosos|autos, Toretto, carreras
Misión Imposible|Tom Cruise, espía, Ethan
Terminator|robot, Schwarzenegger, volveré
Rocky|boxeo, Stallone, Filadelfia
Rambo|Stallone, guerra, soldado
Forrest Gump|chocolates, correr, Tom Hanks
Gladiador|Roma, Máximo, arena
Piratas del Caribe|Jack Sparrow, barco, Johnny Depp
Los Vengadores|Marvel, héroes, Thanos
Batman|Gotham, murciélago, Bruce Wayne
Spider-Man|araña, Peter Parker, telaraña
Iron Man|Tony Stark, armadura, Marvel
Frozen|Elsa, hielo, Let It Go
Buscando a Nemo|pez, Dory, payaso
Intensamente|emociones, Alegría, Pixar
Mi pobre angelito|Kevin, Navidad, ladrones
Ghostbusters|fantasmas, Cazafantasmas, mochila
E.T.|extraterrestre, bicicleta, teléfono
Tiburón|playa, aleta, Spielberg
Psicosis|Hitchcock, ducha, motel
El Resplandor|hotel, Jack Nicholson, hacha
It|payaso, globo, Stephen King
Scream|máscara, cuchillo, teléfono
Pesadilla en Elm Street|Freddy, sueños, garras
Joker|Batman, risa, Gotham
Barbie|muñeca, rosa, Ken
Oppenheimer|bomba atómica, físico, Nolan
Coco|México, guitarra, Día de Muertos
Madagascar|leones, lemur, zoológico
Kung Fu Panda|Po, China, artes marciales
Moana|isla, océano, Maui
Aladdín|lámpara, genio, alfombra
La Bella y la Bestia|rosa, castillo, Disney
La Sirenita|Ariel, mar, Úrsula
Up|globos, casa, viejito
Wall-E|robot, basura, Eva
Relatos salvajes|Darín, episodios, venganza
El secreto de sus ojos|Darín, Oscar, crimen
Esperando la carroza|Mamá Cora, familia, Mimí
Nueve reinas|estafa, Darín, Buenos Aires
Argentina, 1985|juicio, Darín, dictadura
Metegol|futbolito, animada, Campanella
Los Simuladores|equipo, Mario Santos, Lucas
Okupas|Ricardo, Chiqui, serie
El Clan|Puccio, secuestros, familia
Los Tres Mosqueteros|D'Artagnan, espadas, Francia
Mamma Mia|ABBA, boda, Grecia
Grease|Danny, Sandy, Travolta
Dirty Dancing|baile, Swayze, verano
Bridget Jones|diario, soltera, Londres
Pulp Fiction|Tarantino, Travolta, hamburguesa
Karate Kid|Daniel, Miyagi, cera
Indiana Jones|látigo, sombrero, Harrison Ford
Top Gun|aviones, Maverick, Tom Cruise
Náufrago|isla, Wilson, Tom Hanks
Cars|autos, McQueen, Pixar
Monsters Inc.|monstruos, Sulley, Mike
Hotel Transilvania|Drácula, monstruos, dibujos
Breaking Bad|Walter White, metanfetamina, Heisenberg
Game of Thrones|dragones, trono, invierno
Stranger Things|Eleven, Netflix, Upside Down
La Casa de Papel|Profesor, máscaras, Dalí
El Juego del Calamar|coreano, Netflix, juegos
Friends|Central Perk, Ross, Rachel
Los Simpsons|Homero, Springfield, amarillos
Los Soprano|mafia, Tony, New Jersey
The Office|oficina, Michael Scott, falso documental
Merlina|Addams, Netflix, baile
The Last of Us|hongos, Joel, Ellie
Black Mirror|tecnología, antología, Netflix
Narcos|Escobar, Colombia, droga
Peaky Blinders|Tommy Shelby, gorras, Birmingham
Dark|Alemania, viajes en el tiempo, Netflix
Lost|isla, avión, humo
The Walking Dead|zombies, Rick, apocalipsis
Chernobyl|nuclear, Ucrania, radiación
The Mandalorian|Baby Yoda, casco, Star Wars
Succession|familia, empresa, Roy
BoJack Horseman|caballo, animada, Hollywood
Rick y Morty|científico, portal, abuelo
Padre de familia|Peter, Stewie, Griffin
South Park|Cartman, Kenny, dibujos
Cobra Kai|karate, Daniel, dojo
Élite|colegio, España, Netflix
Vikingos|Ragnar, nórdicos, barcos
House of the Dragon|dragones, Targaryen, Game of Thrones
Sherlock|detective, Watson, Londres
Dr. House|médico, bastón, Vicodin
Grey's Anatomy|hospital, Meredith, médicos
Cómo conocí a vuestra madre|Ted, bar, Barney
The Big Bang Theory|Sheldon, científicos, Penny
Better Call Saul|abogado, Breaking Bad, Albuquerque
Euphoria|Zendaya, adolescentes, HBO
Los Bridgerton|época, Londres, Netflix
The Crown|reina, Isabel, Inglaterra
WandaVision|Marvel, Bruja Escarlata, sitcom
Loki|Marvel, dios, Tom Hiddleston
The Boys|superhéroes, Homelander, Amazon
El Marginal|cárcel, Pastor, serie
El Eternauta|nevada, traje, Argentina
Casados con hijos|Francella, familia, Argentina
Floricienta|Cris Morena, cuento, telenovela
Chiquititas|Cris Morena, orfanato, niños
Patito Feo|Cris Morena, Lali, serie
Rebelde Way|Mía, Marizza, colegio
Casi Ángeles|Cris Morena, Lali, banda
Violetta|Disney, cantante, Tini
Los Roldán|familia, Adrián Suar, telenovela
Hannah Montana|Miley Cyrus, peluca, Disney
Los Expedientes Secretos X|Mulder, Scully, extraterrestres
Los Picapiedras|Pedro, Vilma, Hanna-Barbera
Thundercats|León-O, gatos, dibujos
Dragon Ball Z|Goku, esferas, anime
Superman|Clark Kent, capa, volar
Hulk|verde, Banner, furia
Thor|martillo, dios, trueno
Mujer Maravilla|amazona, lazo, Diana
Homero Simpson|donas, Springfield, Duff
Bart Simpson|skate, tirachinas, Homero
Mickey Mouse|ratón, orejas, Disney
Pato Donald|Disney, enojado, sobrinos
Bob Esponja|Fondo de Bikini, piña, Calamardo
Patricio Estrella|rosa, Bob, Fondo de Bikini
Goku|Dragon Ball, saiyajin, pelo
Vegeta|Dragon Ball, príncipe, saiyajin
Naruto|ninja, anime, zorro
Pikachu|Pokémon, amarillo, rayo
Mario Bros|bigote, Nintendo, plomero
Luigi|Mario, verde, Nintendo
Sonic|erizo, azul, velocidad
Link|Zelda, espada, Hyrule
Pac-Man|amarillo, fantasmas, comer
Darth Vader|Star Wars, padre, respiración
Yoda|Jedi, verde, fuerza
Hermione Granger|Hogwarts, Harry, libros
Gandalf|mago, anillo, Hobbit
Buzz Lightyear|astronauta, infinito, Toy Story
Woody|vaquero, Toy Story, sheriff
Elsa|hielo, Frozen, reina
Olaf|muñeco de nieve, Frozen, verano
Simba|león, rey, Hakuna Matata
Sherlock Holmes|detective, lupa, Watson
Drácula|vampiro, Transilvania, sangre
Frankenstein|monstruo, tornillos, doctor
Papá Noel|Navidad, regalos, trineo
Los Reyes Magos|Melchor, regalos, 6 de enero
El Ratón Pérez|diente, almohada, moneda
El Hombre de la Bolsa|miedo, chicos, cuento
Caperucita Roja|lobo, abuelita, bosque
Cenicienta|zapatito, príncipe, hada
Blancanieves|enanitos, manzana, bruja
Pinocho|nariz, mentira, madera
Peter Pan|volar, Nunca Jamás, Campanita
Mafalda|sopa, Quino, Susanita
Felipe|Mafalda, amigo, Quino
Susanita|Mafalda, chusma, Quino
Manolito|Mafalda, almacén, Quino
Patoruzú|cacique, Patagonia, historieta
Isidoro Cañones|Patoruzú, vago, playboy
Clemente|Caloi, pájaro, historieta
Condorito|Chile, historieta, pelado
Don Ramón|Chavo, vecindad, deudor
El Chavo del 8|barril, vecindad, Quico
Chapulín Colorado|Chespirito, héroe, antenas
Quico|Chavo, chupete, vecindad
Doña Florinda|Quico, vecindad, Ramón
Barney|dinosaurio, violeta, canciones
Tom y Jerry|gato, ratón, persecución
Piolín|Silvestre, canario, amarillo
Bugs Bunny|conejo, zanahoria, Looney Tunes
Scooby-Doo|perro, Shaggy, misterio
Garfield|gato, lasaña, naranja
Zorro|espada, máscara, caballo
Robin Hood|arco, ladrón, bosque
Don Quijote|molinos, Sancho, caballero
Tarzán|selva, liana, Jane
Capitán América|escudo, Marvel, soldado
Darth Maul|Star Wars, Sith, rojo
Perro|ladrar, mascota, cola
Gato|maullar, bigotes, mascota
Caballo|montar, galopar, establo
Vaca|leche, muu, campo
Chancho|cerdo, granja, rosa
Gallina|huevo, cacarear, corral
Pato|laguna, cuac, plumas
Oveja|lana, bee, rebaño
Cabra|cuernos, queso, montaña
Conejo|orejas, zanahoria, saltar
Elefante|trompa, colmillos, grande
Jirafa|cuello, manchas, alta
León|rey, melena, selva
Tigre|rayas, felino, naranja
Oso polar|hielo, blanco, polo
Pingüino|Antártida, frac, hielo
Delfín|mar, inteligente, saltar
Ballena|mar, grande, Península Valdés
animales:Tiburón|mar, aleta, dientes
Pulpo|tentáculos, mar, ocho
Medusa|mar, pica, transparente
Cangrejo|pinzas, playa, caminar de costado
Tortuga|caparazón, lenta, mar
Cocodrilo|río, dientes, verde
Serpiente|víbora, veneno, reptar
Lagarto|reptil, cola, sol
Rana|croar, saltar, charco
Sapo|charco, croar, verde
Canguro|Australia, bolsa, saltar
Koala|Australia, eucalipto, árbol
Mono|banana, árbol, trepar
Gorila|King Kong, selva, grande
Murciélago|noche, volar, cueva
Búho|noche, sabio, ojos
Águila|volar, rapaz, garras
Cóndor|Andes, volar, montaña
Loro|hablar, plumas, verde
Colibrí|flores, pico, volar
Flamenco|rosa, patas, laguna
Zorrino|olor, rayas, defensa
Carpincho|roedor, grande, Nordelta
Ñandú|pampa, corre, avestruz
Guanaco|Patagonia, llama, escupir
Llama|Andes, lana, escupir
Vizcacha|pampa, cueva, roedor
Hornero|nido, barro, ave nacional
Mulita|armadillo, caparazón, pampa
Yaguareté|selva, manchas, Misiones
Puma|felino, montaña, león
animales:Zorro|astuto, cola, bosque
Hurón|mascota, largo, comadreja
Hipopótamo|río, grande, África
Rinoceronte|cuerno, grande, África
Cebra|rayas, África, caballo
Camello|joroba, desierto, agua
Panda|bambú, China, blanco
Hormiga|hormiguero, pequeña, trabajar
Abeja|miel, picar, colmena
Mariposa|alas, oruga, colores
Mosquito|picadura, dengue, zumbido
Cucaracha|bicho, cocina, asco
Araña|ocho patas, picar, Spider-Man
Escorpión|cola, veneno, desierto
Caracol|baba, caparazón, lento
Lobo de mar|foca, Mar del Plata, rocas
Ornitorrinco|Australia, pico, ponen huevos
Armadillo|caparazón, bola, pampa
Perezoso|lento, árbol, colgar
Mapache|antifaz, basura, rayas
Ardilla|nueces, cola, árbol
Lechuza|noche, ojos, ave
Chimpancé|mono, simio, primate
Minnie Mouse|ratona, moño, Mickey
Goofy|perro, Disney, torpe
Pluto|perro, Mickey, amarillo
Daisy|Donald, pata, Disney
Tribilín|Goofy, perro, Disney
Chip y Dale|ardillas, Disney, nueces
Winnie the Pooh|oso, miel, Christopher Robin
Tigger|Pooh, tigre, saltar
Piglet|Pooh, chancho, pequeño
Bambi|ciervo, bosque, mamá
Dumbo|elefante, orejas, volar
Pepe Grillo|Pinocho, conciencia, paraguas
Campanita|Peter Pan, hada, polvo mágico
Capitán Garfio|Peter Pan, gancho, pirata
La Bella Durmiente|Aurora, dormir, Maléfica
Ariel|sirena, mar, pelirroja
Bella|Bestia, libros, Disney
Jazmín|Aladdín, princesa, tigre
Genio|lámpara, deseos, azul
Mulán|China, guerrera, dragón
Pocahontas|indígena, Disney, viento
Rapunzel|pelo, torre, Enredados
Anna|Frozen, Elsa, hermana
Maui|Moana, anzuelo, semidiós
Mufasa|Simba, rey, padre
Scar|Simba, tío, león
Timón y Pumba|Hakuna Matata, suricata, jabalí
Nala|Simba, leona, amiga
Baloo|oso, Mowgli, selva
Mowgli|selva, niño, Libro de la Selva
Stitch|Lilo, alienígena, azul
Jessie|vaquera, Toy Story, Woody
Sulley|monstruos, azul, Mike
Mike Wazowski|monstruos, verde, un ojo
Nemo|pez, payaso, Dory
Dory|pez, azul, olvidadiza
Lightning McQueen|Cars, rojo, carreras
Mate|Cars, grúa, oxidado
Remy|Ratatouille, rata, cocinar
Mirabel|Encanto, familia, lentes
Bruno Madrigal|Encanto, no hablamos, visiones
Maléfica|bruja, cuernos, Aurora
Cruella de Vil|dálmatas, pieles, villana
Ursula|Ariel, pulpo, bruja
Jafar|Aladdín, villano, cobra
Gastón|Bella, cazador, músculos
La Reina de Corazones|Alicia, cabeza, cartas
Alicia|país, maravillas, conejo
El Sombrerero Loco|Alicia, té, sombrero
Gato de Cheshire|Alicia, sonrisa, desaparecer
Encanto|Colombia, Madrigal, familia
Los Increíbles|superhéroes, familia, Pixar
Ratatouille|cocina, París, Remy
Enredados|Rapunzel, pelo, torre
Zootopia|conejo, zorro, policía
Raya y el último dragón|Disney, Sisu, Kumandra
Los 101 Dálmatas|perros, manchas, Cruella
La Dama y el Vagabundo|espaguetis, perros, Disney
Fantasía|Mickey, música, aprendiz
Hércules|dios, griego, Disney
Magic Kingdom|parque, castillo, Orlando
Epcot|parque, mundo, Orlando
Hollywood Studios|parque, Star Wars, Orlando
Animal Kingdom|parque, safari, Orlando
Disneyland|California, parque, Walt
Disney World|Orlando, parque, Florida
Orlando|Florida, parques, Disney
El castillo de Cenicienta|parque, Magic Kingdom, fuegos
Space Mountain|montaña rusa, oscuridad, espacio
Splash Mountain|agua, tronco, Brer Rabbit
La Mansión Embrujada|fantasmas, 999, casa
It's a Small World|muñecos, canción, barco
Big Thunder Mountain|montaña rusa, minas, Oeste
Tower of Terror|ascensor, caída, hotel
Expedition Everest|yeti, montaña rusa, Himalaya
Rock 'n' Roller Coaster|Aerosmith, montaña rusa, limusina
Avatar Flight of Passage|banshee, Pandora, volar
Star Wars Galaxy's Edge|Halcón Milenario, Batuu, parque
Fuegos artificiales|noche, cielo, castillo
Orejas de Mickey|gorro, souvenir, ratón
Fast Pass|fila, ahorrar, atracciones
Main Street USA|entrada, calle, parque
Walt Disney|creador, Mickey, dibujos
Pixar|Toy Story, animación, lámpara
Marvel|superhéroes, Stan Lee, cómics
Lucasfilm|Star Wars, George Lucas, productora
Disney+|streaming, plataforma, series
`;
  const T = {};
  for (const line of RAW.split("\n")) {
    const i = line.indexOf("|");
    if (i < 1) continue;
    T[line.slice(0, i).trim()] = line.slice(i + 1).split(",").map((s) => s.trim()).filter(Boolean).slice(0, 3);
  }
  // tabu(categoriaId, carta): primero busca "categoria:carta", luego "carta"
  window.tabu = (cat, w) => T[cat + ":" + w] || T[w] || [];
})();
