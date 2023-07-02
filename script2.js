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
