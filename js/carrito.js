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
  document.getElementById("finalizarCompra").style.visibility = "visible";
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
        document.getElementById("finalizarCompra").style.visibility = "hidden";
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
    document.getElementById("carritoVacio").style.visibility = "visible";
    document.getElementById("totalCompras").style.visibility = "hidden";
    document.getElementById("finalizarCompra").style.visibility = "hidden";
  }
  else {
    document.getElementById("carritoVacio").style.visibility = "hidden";
    document.getElementById("totalCompras").style.visibility = "visible";
    document.getElementById("finalizarCompra").style.visibility = "visible";
   
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

function resumenCompra(carritoFinal) {
    carritoFinal = JSON.parse(localStorage.getItem("MiCarrito"));
    carritoFinal.forEach(producto => {
        $("#datosCompraFinal").append(`<div class="resumenCompra"><h3>Producto: ${producto.nombre}</h3>
        <h3>Cantidad: ${producto.cantidad}</h3>
        <img src= ${producto.img} />
        <h3>Precio: ${producto.precio}</h3>
        <br> <br></div>`)
    });
        
    realizarOtraCompra()
}
function realizarOtraCompra(){
    $("#volverAIndex").append(`<div id="volverATutti" type="button"><a href="index.html">Realizar otra compra en TuttiGlutenFree</a>
    </div>
    `)
    $("#volverAIndex").click((e)=> volverATutti())
}

function volverATutti () {
    localStorage.clear("MiCarrito");
}