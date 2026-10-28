// Mazos del juego. Todo en castellano rioplatense.
window.CATEGORIES = [
  {
    id: "comidas", nombre: "Comidas", emoji: "🥩", color: ["#ff7a3d", "#ff3d6e"],
    palabras: [
      "Asado", "Empanadas", "Milanesa a la napolitana", "Choripán", "Locro", "Dulce de leche", "Alfajor", "Mate cocido",
      "Fainá", "Pizza de muzzarella", "Fugazzeta", "Provoleta", "Vacío", "Entraña", "Morcilla", "Chinchulines",
      "Molleja", "Tira de asado", "Bondiola", "Sándwich de miga", "Medialunas", "Facturas", "Churros", "Tortas fritas",
      "Ñoquis del 29", "Canelones", "Sorrentinos", "Ravioles", "Matambre a la pizza", "Revuelto gramajo", "Humita", "Tamales",
      "Carbonada", "Puchero", "Guiso de lentejas", "Pastel de papa", "Tarta de jamón y queso", "Pionono", "Lemon pie", "Flan con dulce de leche",
      "Panqueque con dulce de leche", "Vigilante", "Helado de dulce de leche", "Chocotorta", "Alfajor de maicena", "Pastafrola", "Budín de pan", "Mondongo",
      "Hamburguesa", "Papas fritas", "Sushi", "Tacos", "Pochoclo", "Chipá", "Sopa paraguaya", "Lomito completo",
      "Tostado de jamón y queso", "Pebete", "Choclo", "Zapallo anco", "Bife de chorizo", "Ojo de bife", "Colita de cuadril", "Fideos con tuco",
      "Polenta", "Arroz con leche", "Mermelada", "Mantecol", "Garrapiñada", "Milanesa con papas fritas", "Sánguche de milanesa", "Hot dog"
    ]
  },
  {
    id: "farandula", nombre: "Farándula Argentina", emoji: "🌟", color: ["#b04cff", "#ff3da8"],
    palabras: [
      "Susana Giménez", "Mirtha Legrand", "Moria Casán", "Wanda Nara", "Mauro Icardi", "Marcelo Tinelli", "Guillermo Francella", "Ricardo Darín",
      "Lali Espósito", "Tini Stoessel", "Fito Páez", "Charly García", "Luis Alberto Spinetta", "Gustavo Cerati", "Soda Stereo", "Los Redondos",
      "Divididos", "Cacho Castaña", "Nicki Nicole", "Duki", "Bizarrap", "Emilia Mernes", "María Becerra", "Cazzu",
      "Jorge Rial", "Yanina Latorre", "Fátima Florez", "Nito Artaza", "Gerardo Sofovich", "Ángel de Brito", "Pampita", "Nicole Neumann",
      "China Suárez", "Benjamín Vicuña", "Pico Mónaco", "Jorge Lanata", "Nacho Goano", "Diego Capusotto", "Peter Capusotto", "Adrián Suar",
      "Florencia Peña", "Araceli González", "Verónica Ojeda", "Flor de la V", "Georgina Barbarossa", "Carmen Barbieri", "Graciela Alfano", "Oscar Mediavilla",
      "Julián Weich", "Mario Pergolini", "Alejandro Fantino", "Santiago del Moro", "Iván de Pineda", "Juana Viale", "Evangelina Anderson", "Zaira Nara",
      "Luciana Salazar", "Charlotte Caniggia", "Mariana Fabbiani", "Dady Brieva", "Pablo Echarri", "Natalia Oreiro", "Ricky Martin", "Cris Morena",
      "Daddy Yankee", "Alberto Olmedo", "Jorge Porcel", "Tato Bores", "Roberto Galán", "Sebastián Yatra", "Ángela Torres", "Lionel Messi"
    ]
  },
  {
    id: "peliculas", nombre: "Películas y Series", emoji: "🎬", color: ["#3d8bff", "#3dd6ff"],
    palabras: [
      "Titanic", "El Padrino", "Toy Story", "Volver al futuro", "Jurassic Park", "El Rey León", "Shrek", "Matrix",
      "Harry Potter", "El Señor de los Anillos", "Star Wars", "Avatar", "Rápidos y Furiosos", "Misión Imposible", "Terminator", "Rocky",
      "Rambo", "Forrest Gump", "Gladiador", "Piratas del Caribe", "Los Vengadores", "Batman", "Spider-Man", "Iron Man",
      "Frozen", "Buscando a Nemo", "Intensamente", "Mi pobre angelito", "Ghostbusters", "E.T.", "Tiburón", "Psicosis",
      "El Resplandor", "It", "Scream", "Pesadilla en Elm Street", "Joker", "Barbie", "Oppenheimer", "Coco",
      "Madagascar", "Kung Fu Panda", "Moana", "Aladdín", "La Bella y la Bestia", "La Sirenita", "Up", "Wall-E",
      "Relatos salvajes", "El secreto de sus ojos", "Esperando la carroza", "Nueve reinas", "Argentina, 1985", "Metegol", "Los Simuladores",
      "Okupas", "El Clan", "Los Tres Mosqueteros", "Mamma Mia", "Grease", "Dirty Dancing", "Bridget Jones",
      "Pulp Fiction", "Karate Kid", "Indiana Jones", "Top Gun", "Náufrago", "Cars", "Monsters Inc.", "Hotel Transilvania",
      // Series
      "Breaking Bad", "Game of Thrones", "Stranger Things", "La Casa de Papel", "El Juego del Calamar", "Friends", "Los Simpsons", "Los Soprano",
      "The Office", "Merlina", "The Last of Us", "Black Mirror", "Narcos", "Peaky Blinders", "Dark", "Lost",
      "The Walking Dead", "Chernobyl", "The Mandalorian", "Succession", "BoJack Horseman", "Rick y Morty", "Padre de familia", "South Park",
      "Cobra Kai", "Élite", "Vikingos", "House of the Dragon", "Sherlock", "Dr. House", "Grey's Anatomy", "Cómo conocí a vuestra madre",
      "The Big Bang Theory", "Better Call Saul", "Euphoria", "Los Bridgerton", "The Crown", "WandaVision", "Loki", "The Boys",
      "El Marginal", "El Eternauta", "Casados con hijos", "Floricienta", "Chiquititas", "Patito Feo", "Rebelde Way", "Casi Ángeles",
      "Violetta", "Los Roldán", "Hannah Montana", "Los Expedientes Secretos X", "Los Picapiedras", "Thundercats", "Dragon Ball Z"
    ]
  },
  {
    id: "personajes", nombre: "Personajes", emoji: "🦸", color: ["#27c47a", "#b6e63a"],
    palabras: [
      "Superman", "Batman", "Spider-Man", "Hulk", "Thor", "Mujer Maravilla", "Homero Simpson", "Bart Simpson",
      "Mickey Mouse", "Pato Donald", "Bob Esponja", "Patricio Estrella", "Goku", "Vegeta", "Naruto", "Pikachu",
      "Mario Bros", "Luigi", "Sonic", "Link", "Pac-Man", "Darth Vader", "Yoda", "Harry Potter",
      "Hermione Granger", "Gandalf", "Shrek", "Buzz Lightyear", "Woody", "Elsa", "Olaf", "Simba",
      "Sherlock Holmes", "Drácula", "Frankenstein", "Papá Noel", "Los Reyes Magos", "El Ratón Pérez", "El Hombre de la Bolsa", "Caperucita Roja",
      "Cenicienta", "Blancanieves", "Pinocho", "Peter Pan", "Mafalda", "Felipe", "Susanita", "Manolito",
      "El Eternauta", "Patoruzú", "Isidoro Cañones", "Clemente", "Condorito", "Don Ramón", "El Chavo del 8", "Chapulín Colorado",
      "Quico", "Doña Florinda", "Barney", "Tom y Jerry", "Piolín", "Bugs Bunny", "Scooby-Doo", "Garfield",
      "Zorro", "Robin Hood", "Don Quijote", "Tarzán", "Capitán América", "Iron Man", "Joker", "Darth Maul"
    ]
  },
  {
    id: "animales", nombre: "Animales", emoji: "🐾", color: ["#ffb81f", "#ff7a3d"],
    palabras: [
      "Perro", "Gato", "Caballo", "Vaca", "Chancho", "Gallina", "Pato", "Oveja",
      "Cabra", "Conejo", "Elefante", "Jirafa", "León", "Tigre", "Oso polar", "Pingüino",
      "Delfín", "Ballena", "Tiburón", "Pulpo", "Medusa", "Cangrejo", "Tortuga", "Cocodrilo",
      "Serpiente", "Lagarto", "Rana", "Sapo", "Canguro", "Koala", "Mono", "Gorila",
      "Murciélago", "Búho", "Águila", "Cóndor", "Loro", "Colibrí", "Flamenco", "Zorrino",
      "Carpincho", "Ñandú", "Guanaco", "Llama", "Vizcacha", "Hornero", "Mulita", "Yaguareté",
      "Puma", "Zorro", "Hurón", "Hipopótamo", "Rinoceronte", "Cebra", "Camello", "Panda",
      "Hormiga", "Abeja", "Mariposa", "Mosquito", "Cucaracha", "Araña", "Escorpión", "Caracol",
      "Lobo de mar", "Ornitorrinco", "Armadillo", "Perezoso", "Mapache", "Ardilla", "Lechuza", "Chimpancé"
    ]
  },
  {
    id: "disney", nombre: "Disney", emoji: "🏰", color: ["#2f6bff", "#9b3cff"],
    palabras: [
      // Personajes
      "Mickey Mouse", "Minnie Mouse", "Goofy", "Pluto", "Pato Donald", "Daisy", "Tribilín", "Chip y Dale",
      "Winnie the Pooh", "Tigger", "Piglet", "Bambi", "Dumbo", "Pinocho", "Pepe Grillo", "Peter Pan",
      "Campanita", "Capitán Garfio", "Cenicienta", "Blancanieves", "La Bella Durmiente", "Ariel", "Bella", "Aladdín",
      "Jazmín", "Genio", "Mulán", "Pocahontas", "Rapunzel", "Elsa", "Anna", "Olaf",
      "Moana", "Maui", "Simba", "Mufasa", "Scar", "Timón y Pumba", "Nala", "Baloo",
      "Mowgli", "Stitch", "Buzz Lightyear", "Woody", "Jessie", "Sulley", "Mike Wazowski", "Nemo",
      "Dory", "Wall-E", "Lightning McQueen", "Mate", "Remy", "Mirabel", "Bruno Madrigal", "Maléfica",
      "Cruella de Vil", "Ursula", "Jafar", "Gastón", "La Reina de Corazones", "Alicia", "El Sombrerero Loco", "Gato de Cheshire",
      // Películas
      "La Sirenita", "La Bella y la Bestia", "El Rey León", "Frozen", "Encanto", "Coco",
      "Intensamente", "Toy Story", "Buscando a Nemo", "Monsters Inc.", "Los Increíbles", "Ratatouille", "Up", "Cars",
      "Enredados", "Zootopia", "Raya y el último dragón", "Los 101 Dálmatas", "La Dama y el Vagabundo", "Fantasía", "Hércules", "Tarzán",
      // Parques y trivia
      "Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom", "Disneyland", "Disney World", "Orlando", "El castillo de Cenicienta",
      "Space Mountain", "Splash Mountain", "Piratas del Caribe", "La Mansión Embrujada", "It's a Small World", "Big Thunder Mountain", "Tower of Terror", "Expedition Everest",
      "Rock 'n' Roller Coaster", "Avatar Flight of Passage", "Star Wars Galaxy's Edge", "Fuegos artificiales", "Orejas de Mickey", "Fast Pass", "Main Street USA", "Walt Disney",
      "Pixar", "Marvel", "Lucasfilm", "Disney+",
      // Más Disney
      "Lilo", "Hades", "Megara", "Quasimodo", "Yzma", "Rafiki", "Sebastián", "Flynn Rider", "Mérida", "Tiana", "Kristoff", "Pascal", "Ralph el Demoledor", "Baymax", "Hiro Hamada", "Edna Moda", "Jack Skellington", "El Jorobado de Notre Dame", "El Emperador y sus locuras", "Valiente", "La Princesa y el Sapo", "Gran Héroe 6", "Pesadilla antes de Navidad", "Lilo y Stitch", "Mary Poppins", "Los Aristogatos", "El Libro de la Selva", "Luca", "Peter Pan's Flight", "Jungle Cruise", "Dumbo the Flying Elephant", "Soarin'", "Test Track", "Mission: Space", "Toy Story Land", "Slinky Dog Dash", "Rise of the Resistance", "Spaceship Earth", "Tree of Life", "Typhoon Lagoon", "Blizzard Beach", "Disney Springs", "Steamboat Willie", "Oswald el conejo afortunado", "Hakuna Matata", "Libre soy", "Bibbidi Bobbidi Boo", "Mickey Mouse Club", "Disney Channel", "Dole Whip"
    ]
  }
];
