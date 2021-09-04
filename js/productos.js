class Producto {
    constructor(nombre, id, precio, img, cantidad) {
      this.nombre = nombre;
      this.id = id;
      this.precio = precio;
      this.img = img;
      this.cantidad = cantidad;
      this.seccion = "producto";
    }
  }
  const superdesayuno = new Producto(
    "Super Desayuno",
    1,
    1800,
    "imagenesventa/desayunog-min.jpg",
    0
  );
  const desayuno = new Producto(
    "Desayuno",
    2,
    1500,
    "imagenesventa/desayunochic-min.jpg",
    0
  );
  const bandejitagrande = new Producto(
    "Bandejita de tortitas x16",
    3,
    900,
    "imagenesventa/bandejitagrande-min.jpg",
    0
  );
  const cabsha = new Producto(
    "Torta Cabsha",
    4,
    1200,
    "imagenesventa/cabsha-min.jpeg",
    0
  );
  const rogel = new Producto(
    "Rogel",
    5,
    1300,
    "imagenesventa/rogel2.JPG",
    0
  );
  const helada = new Producto(
    "Torta Helada",
    6,
    1200,
    "imagenesventa/helad-min.JPG",
    0
  );
  const brownie = new Producto(
    "Brownie",
    7,
    1300,
    "imagenespilares/postreddl.jpg",
    0
  );
  const bombaf = new Producto(
    "Torta Rellena",
    8,
    1300,
    "imagenesventa/bombafrut-min.jpg",
    0
  );
  const frutilla = new Producto(
    "Tarta de Frutilla",
   9,
    900,
    "imagenesventa/tartafrut.jpg",
    0
  );
  const lemonpie = new Producto(
    "Lemon Pie",
    10,
    900,
    "imagenesventa/lemonpie-min.jpg",
    0
  );
  const alfachoco = new Producto(
    "Alfajores de Chocolate",
    11,
    500,
    "imagenesventa/alfachocolate-min.JPG",
    0
  );
  const maizena = new Producto(
    "Alfajorcitos de Maizena",
    12,
    500,
    "imagenesventa/maizenavert.jpg",
    0
  );
  const nuez = new Producto(
    "Alfajorcitos de Nuez",
    13,
    500,
    "imagenesventa/alfanuez-min.jpg",
    0
  );
  const alfajocookies = new Producto(
    "Alfacookies",
    14,
    600,
    "imagenesventa/paraelte.jpg",
    0
  );
  const chips = new Producto(
    "Cookies con Chips",
    15,
    250,
    "imagenesventa/cookieschoco-min.jpg",
    0
  );
  const rellenas = new Producto(
    "Cookies rellenas de limón",
    16,
    300,
    "imagenesventa/havanna-min.jpg",
    0
  );
   
  const limon = new Producto(
    "Cookies de limón",
    17,
    250,
    "imagenesventa/limon-min.jpg",
    0
  );
  const anillos = new Producto(
    "Anillos bañados en chocolate",
    18,
    300,
    "imagenesventa/anillos-min.JPG",
    0
  );
  const pandecampo = new Producto(
    "Pan de Campo",
    19,
    350,
    "imagenesventa/pancampo.jpg",
    0
  );
  const pandemolde = new Producto(
    "Pan de Molde",
    20,
    300,
    "imagenesventa/pandemolde.jpg",
    0
  );
  const pandetrigo = new Producto(
    "Pan de Trigo Sarraceno",
    21,
    300,
    "imagenesventa/pantrigosarra.jpg",
    0
  );
  const pandequeso = new Producto(
    "Pancitos de Queso",
    22,
    440,
    "imagenesventa/panqueso.jpg",
    0
  );
  const pancitotrigo = new Producto(
    "Pancitos de Trigo Sarraceno",
    23,
    1100,
    "imagenesventa/pancitostrigo.jpg",
    0
  );
  const panchips = new Producto(
    "Pancitos de Chips",
    24,
    280,
    "imagenesventa/chips-min.jpg",
    0
  );
  const pizza = new Producto(
    "Prepizza",
    25,
    110,
    "imagenesventa/pizza.jpg",
    0
  );
  const bizcochitosgrasa = new Producto(
    "Bizcochitos de grasa",
    26,
    250,
    "imagenesventa/bizcochitosgrasa-min.JPG",
    0
  );
  const bizcochitoslibritos = new Producto(
    "Bizcochitos Libritos",
    27,
    300,
    "imagenesventa/bizcochitoslibritos-min.JPG",
    0
  );
productos = [];
productos.push(
superdesayuno,
desayuno,
bandejitagrande,
cabsha,
rogel,
helada,
brownie,
bombaf,
frutilla,
lemonpie,
alfachoco,
maizena,
nuez,
alfajocookies,
chips,
rellenas,
limon,
anillos,
pandecampo,
pandemolde,
pandetrigo,
pandequeso,
pancitotrigo,
panchips,
pizza,
bizcochitosgrasa,
bizcochitoslibritos
);
let paginaActual = window.location.pathname;
