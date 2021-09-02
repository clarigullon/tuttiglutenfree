class Producto {
  constructor(nombre, seccion, id, precio, img, cantidad) {
    this.nombre = nombre;
    this.seccion = seccion;
    this.id = id;
    this.precio = precio;
    this.img = img;
    this.cantidad = cantidad;
  }
}
const superdesayuno = new Producto(
  "Super Desayuno",
  "regalos",
  Math.random().toString(36).substr(2, 9),
  1800,
  "imagenesventa/desayunog-min.jpg",
  0
);
const desayuno = new Producto(
  "Desayuno",
  "regalos",
  Math.random().toString(36).substr(2, 9),
  1500,
  "imagenesventa/desayunochic-min.jpg",
  0
);
const bandejitagrande = new Producto(
  "Bandejita de tortitas x16",
  "regalos",
  Math.random().toString(36).substr(2, 9),
  900,
  "imagenesventa/bandejitagrande-min.jpg",
  0
);
const bandejitachica = new Producto(
  "Bandejita de mini tortitas x8",
  "regalos",
  Math.random().toString(36).substr(2, 9),
  700,
  "imagenesventa/bandejitachica-min.jpg",
  0
);
const cabsha = new Producto(
  "Torta Cabsha",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1200,
  "imagenesventa/cabsha-min.jpeg",
  0
);
const rogel = new Producto(
  "Rogel",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1300,
  "imagenesventa/rogel2.JPG",
  20
);
const helada = new Producto(
  "Torta Helada",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1200,
  "imagenesventa/helad-min.JPG",
  0
);
const brownie = new Producto(
  "Brownie",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1300,
  "imagenespilares/postreddl.jpg",
  0
);
const bombaf = new Producto(
  "Torta Rellena",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1300,
  "imagenesventa/bombafrut-min.jpg",
  0
);
const frutilla = new Producto(
  "Tarta de Frutilla",
  "postres",
  Math.random().toString(36).substr(2, 9),
  900,
  "imagenesventa/tartafrut.jpg",
  0
);
const lemonpie = new Producto(
  "Lemon Pie",
  "postres",
  Math.random().toString(36).substr(2, 9),
  900,
  "imagenesventa/lemonpie-min.jpg",
  0
);
const alfachoco = new Producto(
  "Alfajores de Chocolate",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  500,
  "imagenesventa/alfachocolate-min.JPG",
  0
);
const maizena = new Producto(
  "Alfajorcitos de Maizena",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  500,
  "imagenesventa/maizenavert.jpg",
  0
);
const nuez = new Producto(
  "Alfajorcitos de Nuez",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  500,
  "imagenesventa/alfanuez-min.jpg",
  0
);
const alfajocookies = new Producto(
  "Alfacookies",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  600,
  "imagenesventa/paraelte.jpg",
  0
);
const chips = new Producto(
  "Cookies con Chips",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  250,
  "imagenesventa/cookieschoco-min.jpg",
  0
);
const rellenas = new Producto(
  "Cookies rellenas de limón",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  300,
  "imagenesventa/havanna-min.jpg",
  0
);
 
const limon = new Producto(
  "Cookies de limón",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  250,
  "imagenesventa/limon-min.jpg",
  0
);
const anillos = new Producto(
  "Anillos bañados en chocolate",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  300,
  "imagenesventa/anillos-min.JPG",
  0
);
const pandecampo = new Producto(
  "Pan de Campo",
  "salados",
  Math.random().toString(36).substr(2, 9),
  350,
  "imagenesventa/pancampo.jpg",
  0
);
const pandemolde = new Producto(
  "Pan de Molde",
  "salados",
  Math.random().toString(36).substr(2, 9),
  300,
  "imagenesventa/pandemolde.jpg",
  0
);
const pandetrigo = new Producto(
  "Pan de Trigo Sarraceno",
  "salados",
  Math.random().toString(36).substr(2, 9),
  300,
  "imagenesventa/pantrigosarra.jpg",
  0
);
const pandequeso = new Producto(
  "Pancitos de Queso",
  "salados",
  Math.random().toString(36).substr(2, 9),
  440,
  "imagenesventa/panqueso.jpg",
  0
);
const pancitotrigo = new Producto(
  "Pancitos de Trigo Sarraceno",
  "salados",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/pancitostrigo.jpg",
  0
);
const panchips = new Producto(
  "Pancitos de Chips",
  "salados",
  Math.random().toString(36).substr(2, 9),
  280,
  "imagenesventa/chips-min.jpg",
  0
);
const pizza = new Producto(
  "Prepizza",
  "salados",
  Math.random().toString(36).substr(2, 9),
  110,
  "imagenesventa/pizza.jpg",
  0
);
const bizcochitosgrasa = new Producto(
  "Bizcochitos de grasa",
  "salados",
  Math.random().toString(36).substr(2, 9),
  250,
  "imagenesventa/bizcochitosgrasa-min.JPG",
  0
);
const bizcochitoslibritos = new Producto(
  "Bizcochitos Libritos",
  "salados",
  Math.random().toString(36).substr(2, 9),
  300,
  "imagenesventa/bizcochitoslibritos-min.JPG",
  0
);
productos = [];
productos.push(
  superdesayuno,
  desayuno,
  bandejitagrande,
  bandejitachica,
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
window.onload = function (){
  $("#mySidenav").append( `<div class="totalCompra"><h3>TOTAL:</h3>
  <input id="totalCompra" value=0 type="text">
  </div>`)
  
}
for (const producto of productos) {
 $("#postresCards")
        .append(`<div class="productosCarrito" id=${producto.id}> <img src= ${producto.img} />
      <p>  ${producto.nombre}</p>
      <b> $ ${producto.precio}</b> <br>
      <button id="${producto.id}" class="btn">AGREGAR</button> <br>
      </div> `);
    }
$(".btn").click((e)=>agregarProducto(e))
function agregarClick(e) {
  if ((e.target !== null) && (e.target !== "undefined")) {
    e.target.style.opacity = "0.8";
    e.target.style.backgroundColor = "#ffd7ba"; 
    e.target.innerHTML = "Agregado!"; 
  }
}
let carrito = new Array();
let carritoSeccion = []
function agregarProducto(e) {
  agregarClick(e);
  let productoClickeado = productos.find((item) => item.id == e.target.id);
  if (localStorage.getItem("MiCarrito") !== null) {
    carrito = JSON.parse(localStorage.getItem("MiCarrito"))
  }
  if (localStorage.getItem(productoClickeado.seccion) !== null) {
    carritoSeccion = JSON.parse(localStorage.getItem(productoClickeado.seccion));
  }
  console.log(carrito)
  carrito.push(productoClickeado);
  carritoSeccion.push(productoClickeado);
  localStorage.setItem("MiCarrito", JSON.stringify(carrito));
  localStorage.setItem(productoClickeado.seccion, JSON.stringify(carritoSeccion));
  agregarItem(productoClickeado);
  total(productoClickeado);
}
function total(productoClickeado){
  let totalActual = $("#totalCompra").val()
  let totalActualizado = parseInt(totalActual) + parseInt(productoClickeado.precio) 
  $("#totalCompra").val(totalActualizado);
}
function agregarItem(producto) {
  $("#mySidenav").append(` <div class="itemCarrito" id="remover${producto.id}"><h3>${producto.nombre}</h3>
  <img src= ${producto.img} />
  <b>$${producto.precio}</b> 
  <div type="button"><i class="fas fa-plus sumarIcon" id="${producto.id}"></i></div>
  <input id="contador${producto.id}" value="${cantidadItem(producto.id)}" type="text">
  <div type="button"><i class="fas fa-window-minimize restarIcon" id="${producto.id}"></i></div>
  <div type="button"><i class="fas fa-trash btn-remover" id="${producto.id}"></i></div>
  </div>`);
  $(".btn-remover").click((e)=>removerItem(e))
  $(".sumarIcon").click((e)=> sumarItem(e))
  $(".restarIcon").click((e)=> restarItem(e))
}
function cantidadItem (e) {
  carrito=JSON.parse(localStorage.getItem("MiCarrito"));
  if (carrito != null) {
    let item = carrito.find((item) =>item.id==e);
    console.log(e)
    let cant = item.cantidad;
    return cant;
  }
  return 0;
}
function sumarItem (e) {
  carrito = JSON.parse(localStorage.getItem("MiCarrito"));
  let item = carrito.find((item) => item.id == e.target.id);
  console.log(parseInt($("#contador"+item.id).val()))
  let cantidad = parseInt($("#contador"+ item.id).val()) + 1;
  $("#contador"+item.id).val(cantidad);
  localStorage.setItem("MiCarrito", JSON.stringify(carrito));
}
function restarItem (e) {
  carrito = JSON.parse(localStorage.getItem("MiCarrito"));
  let item = carrito.find((item) => item.id == e.target.id);
  let cantidad = parseInt($("#contador"+ item.id).val()) -1;
  $("#contador"+item.id).val(cantidad);
  localStorage.setItem("MiCarrito", JSON.stringify(carrito));
}
function mostrarItems(array) {
  for (const producto of array) {
    agregarItem(producto)
  }
  $(".btn-remover").click((e)=>removerItem(e))
}
function removerItem(e) {
  carrito = JSON.parse(localStorage.getItem("MiCarrito"));
  let indexDelProducto = carrito.findIndex((item) => item.id == e.target.id);
  if (indexDelProducto !== -1) {
    carrito.splice(indexDelProducto, 1);
    localStorage.setItem("MiCarrito", JSON.stringify(carrito));
    localStorage.setItem("postres", JSON.stringify(carrito));
    localStorage.setItem("paraelte", JSON.stringify(carrito));
    localStorage.setItem("salados", JSON.stringify(carrito));
    localStorage.setItem("regalos", JSON.stringify(carrito));
    let idARemover = "#remover" + e.target.id
    $(idARemover).remove()
  }
}
$("#carrito").click(() => openNav())
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  if (localStorage.getItem("MiCarrito") != null) {
    let carritoLocalStorage = JSON.parse(localStorage.getItem("MiCarrito"))
    let carritoItemsAgregar = [];
    let carritoTemporalSeccion = [];
    let seccion = getSeccion();
    if (localStorage.getItem(seccion) !== null) {
      carritoTemporalSeccion = JSON.parse(localStorage.getItem(seccion));
      carritoLocalStorage.forEach(item => {
        if (carritoTemporalSeccion.findIndex( r=> item.id === r.id) === -1) {
          carritoItemsAgregar.push(item);
          carritoTemporalSeccion.push(item);
        }   
      })
      if (carritoTemporalSeccion.length >0 && document.getElementById("mySidenav") !== null && document.getElementById("mySidenav").childElementCount === 2) {
        mostrarItems(carritoTemporalSeccion);
      } else {
        mostrarItems(carritoItemsAgregar);
      }
    }
    else {
      carritoTemporalSeccion = carritoLocalStorage;
      mostrarItems(carritoLocalStorage);
    }
    localStorage.setItem(seccion, JSON.stringify(carritoTemporalSeccion));
    totalGeneral ()
  } 
}
function totalGeneral (){
  let hola = 0
  carrito = JSON.parse(localStorage.getItem("MiCarrito"));
  carrito.forEach(producto => {
    hola += producto.precio * producto.cantidad
  })
  console.log(hola)
  $("#totalCompra").val(hola)
}
function getSeccion() {
  if (paginaActual.includes("postres")) {
    return "postres";
  }
  if (paginaActual.includes("desayunos")) {
    return "regalos";
  }
  if (paginaActual.includes("paraelte")) {
    return "paraelte";
  }
  if (paginaActual.includes("salados")) {
    return "salados";
  }
  return "perdiste"
}
$("#sideNavClose").click(() => closeNav())
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function eliminarProductoLocalStorage(carrito){
  let productosLS;
  productosLS = this.producto();
  productosLS.forEach(function(productoLS, index){
      if(productoLS.id === carrito){
          productosLS.splice(index, 1);
      }
  });

  localStorage.setItem('MiCarrito', JSON.stringify(carrito));
}
function vaciarLocalStorage(){
  localStorage.clear();
}
