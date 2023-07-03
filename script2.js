let carrito = [];
let totalCarrito = 0.00;

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  totalCarrito += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoElement = document.getElementById('carrito');
  const totalElement = document.getElementById('total');
  carritoElement.innerHTML = '';
  totalElement.textContent = `S/${totalCarrito.toFixed(2)}`;

  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.producto} - S/${item.precio.toFixed(2)}`;
    carritoElement.appendChild(li);
  });
}

function realizarPago() {
  // Obtener el valor del totalCarrito formateado como cadena
  const totalCarritoString = totalCarrito.toFixed(2);

  // Generar la URL con el valor del totalCarrito como parámetro
  const url = `index2.html?total=${totalCarritoString}`;

  // Redirigir a la página de pago
  window.location.href = url;
}

// Enlazar el evento click del enlace "Pagar" a la función realizarPago
const pagarEnlace = document.getElementById('pagarEnlace');
pagarEnlace.addEventListener('click', realizarPago);
//................................................................PDF
var infoLimoneroButton = document.getElementById('infoLaurel');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'laurel.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoLimonero');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'limonero.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoMandarino');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'mandarino.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoNaranjo');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'naranjo.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoGuanabana');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'guanabana.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoSaman');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'saman.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoPechiche');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'pechiche.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoGuachapeli');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'limonero.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoGuayacan');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'guayacan.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoMaceta');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'maceta.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoMacetaGrande');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'macetaGrande.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoTierra');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'https://www.agropinos.com/blog/la-fertilidad-en-el-suelo'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoAbono');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'https://www.bbva.com/es/sostenibilidad/abonos-organicos-aliados-de-la-agricultura-sostenible/'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoInsecticida');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'insecticida.pdf'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
var infoLimoneroButton = document.getElementById('infoTijeras');
infoLimoneroButton.addEventListener('click', function() {
  var pdfURL = 'https://www.demaquinasyherramientas.com/herramientas-de-corte/introduccion-a-las-tijeras-de-poda-diseno-tipos-y-formas-de-uso'; // Ruta del archivo PDF
  window.open(pdfURL, '_blank');
});
