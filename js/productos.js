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
window.onload = function (){
    $("#totalCompras").append( `<h3>TOTAL:</h3>
    <input id="totalCompra" value=0 type="text">`)
    deshabilitarBotones();
}
for (const producto of productos) {
    $("#postresCards")
        .append(`<div class="productosCarrito" id=${producto.id}> <img src= ${producto.img} />
                <p> ${producto.nombre}</p>
                <b> $${producto.precio}</b> <br>
                <button id="agregar${producto.id}" class="btn-agregar">AGREGAR</button> <br>
                </div> `);
}
$(".btn-agregar").click((e)=>agregarProducto(e))
function agregarClick(e) {
if ((e.target !== null) && (e.target !== "undefined")) {
    e.target.style.opacity = "0.8";
    e.target.style.backgroundColor = "#ffd7ba"; 
    e.target.disabled = true;
    e.target.innerHTML = "Agregado!"; 
    } 
}
let carrito = [];
let carritoSeccion = []
function agregarProducto(e) {
  agregarClick(e);
  let id = e.target.id.split("agregar")[1]
  let productoClickeado = productos.find((item) => item.id == id);
  if (localStorage.getItem("MiCarrito") !== null) {
    carrito = JSON.parse(localStorage.getItem("MiCarrito"))
  }
  if (localStorage.getItem(productoClickeado.seccion) !== null) {
    carritoSeccion = JSON.parse(localStorage.getItem(productoClickeado.seccion));
  }
  productoClickeado.cantidad += 1;
  carrito.push(productoClickeado);
  carritoSeccion.push(productoClickeado);
  localStorage.setItem("MiCarrito", JSON.stringify(carrito));
  localStorage.setItem(productoClickeado.seccion, JSON.stringify(carritoSeccion));
  agregarItem(productoClickeado);
  total(productoClickeado);
  document.getElementById("totalCompras").style.visibility = "visible";
  document.getElementById("carritoVacio").style.visibility = "hidden";
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
  <div type="button"><i class="fas fa-chevron-up sumarIcon" id="${producto.id}"></i></div>
  <div type="button"><i class="fas fa-chevron-down restarIcon" id="${producto.id}"></i></div>
  <input id="contador${producto.id}" class="inputCantidad" value="${cantidadItem(producto.id)}" type="text">
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
    let cant = item.cantidad;
    return cant;
  }
  return 0;
}
function sumarItem (e) {
  carrito = JSON.parse(localStorage.getItem("MiCarrito"));
  let valorActual = parseInt($("#totalCompra").val())
  let item = carrito.find((item) => item.id == e.target.id);
  let cantidad = parseInt($("#contador"+ item.id).val()) + 1;
  $("#contador"+item.id).val(cantidad);
  valorActual += item.precio;
  item.cantidad += 1;
  $("#totalCompra").val(parseInt(valorActual));
  localStorage.setItem("MiCarrito", JSON.stringify(carrito));
  
}
function restarItem (e) {
  carrito = JSON.parse(localStorage.getItem("MiCarrito"));
  let valorActual = parseInt($("#totalCompra").val())
  let item = carrito.find((item) => item.id == e.target.id);
  if (parseInt($("#contador"+ item.id).val()) >= 2) {
    let cantidad = parseInt($("#contador"+ item.id).val()) -1;
    $("#contador"+item.id).val(cantidad);
    valorActual -= item.precio;
    item.cantidad -= 1;
    $("#totalCompra").val(parseInt(valorActual));
    localStorage.setItem("MiCarrito", JSON.stringify(carrito));
  }
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
    let item = carrito.find((item) => item.id == e.target.id);
    let valorActual = parseInt($("#totalCompra").val())
    valorActual -= parseInt(item.precio*item.cantidad)
    carrito.splice(indexDelProducto, 1);
    localStorage.setItem("MiCarrito", JSON.stringify(carrito));
    let idARemover = "#remover" + e.target.id
    $(idARemover).remove()
    $("#totalCompra").val(valorActual);
    let productoClickeado = productos.find((item) => item.id == e.target.id);
    productoClickeado.cantidad = 0;
    rehabilitarBoton(item);
    if (valorActual == 0) {
        document.getElementById("totalCompras").style.visibility = "hidden";
        document.getElementById("carritoVacio").style.visibility = "visible";
    }
  }
}
$("#sideNavClose").click(() => closeNav())
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$("#carrito").click(() => openNav())
function openNav() {
  let carritoLocalStorage = JSON.parse(localStorage.getItem("MiCarrito"))
  document.getElementById("mySidenav").style.width = "250px";
  if (carritoLocalStorage == null || carritoLocalStorage === [] || (Array.isArray(carritoLocalStorage) && carritoLocalStorage.length == 0)) {
    console.log("aca estoy");
    document.getElementById("carritoVacio").style.visibility = "visible";
    document.getElementById("totalCompras").style.visibility = "hidden";
  }
  else {
    console.log("entre tmb")
    document.getElementById("carritoVacio").style.visibility = "hidden";
    document.getElementById("totalCompras").style.visibility = "visible";
   
    if (document.getElementById("mySidenav") !== null && document.getElementById("mySidenav").childElementCount <= 3) {
        mostrarItems(carritoLocalStorage);
      }
   } 
   totalGeneral ()
}
function totalGeneral (){
    if (JSON.parse(localStorage.getItem("MiCarrito") != null)) {
        let precioFinal = 0
        carrito = JSON.parse(localStorage.getItem("MiCarrito"));
        if (carrito != null) {
            carrito.forEach(producto => {
                precioFinal += producto.precio * producto.cantidad
            });
            $("#totalCompra").val(precioFinal)
        }
    }
  }
function deshabilitarBotones() {
    if (JSON.parse(localStorage.getItem("MiCarrito")) != null) {
        carrito = JSON.parse(localStorage.getItem("MiCarrito"));
        carrito.forEach(producto => {
            let button =  $("#agregar"+producto.id).get()[0];
            if (button != null || typeof(button) !== "undefined"){
                button.disabled = true;
                button.style.opacity = "0.8";
                button.style.backgroundColor = "#ffd7ba"; 
                button.innerHTML = "Agregado!"; 
            }
        })
    }
}

function rehabilitarBoton(producto) {
    let button = $("#agregar"+producto.id).get()[0];
    button.disabled = false;
    button.style.backgroundColor = "#f0efeb"; 
    button.innerHTML = "AGREGAR"; 
}