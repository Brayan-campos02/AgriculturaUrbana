// Obtener referencia al botón y a los campos de entrada
var btnPagar = document.querySelector('#button');
var btnPagar2 = document.querySelector('#botonContraEntrega');
var inputNumeroTarjeta = document.querySelector('input:nth-of-type(1)');
var inputFechaVencimiento = document.querySelector('input:nth-of-type(2)');
var inputCVV = document.querySelector('input:nth-of-type(3)');
var inputNombres = document.querySelector('input:nth-of-type(4)');
var inputApellidos = document.querySelector('input:nth-of-type(5)');
var inputCorreoElectronico = document.querySelector('input:nth-of-type(6)');
var inputDirecccion = document.querySelector('input:nth-of-type(7)');
var inputReferencia = document.querySelector('input:nth-of-type(8)');

var inputNombres2 = document.querySelector('#nombres2');
var inputApellidos2 = document.querySelector('#apellidos2');
var inputCorreoElectronico2 = document.querySelector('#correo2');
var inputDirecccion2 = document.querySelector('#direccion2');
var inputReferencia2 = document.querySelector('#referencia2');

// Agregar evento de clic al botón
btnPagar.addEventListener('click', function() {
  // Obtener los valores de los campos de entrada
  var numeroTarjeta = inputNumeroTarjeta.value;
  var fechaVencimiento = inputFechaVencimiento.value;
  var cvv = inputCVV.value;
  var nombres = inputNombres.value;
  var apellidos = inputApellidos.value;
  var correoElectronico = inputCorreoElectronico.value;
  var dirrecion = inputDirecccion.value;
  var referencia = inputReferencia.value;


  if(numeroTarjeta == "5555 5555 5555 5555"){
    if(fechaVencimiento == "12/30"){
        if(cvv = "123"){
          if(correoElectronico === '' || dirrecion === '' || referencia === ''){
            Swal.fire({
              title: "Error",
              text: "Por favor, complete todos los campos",
              icon: "error",
              confirmButtonColor: 'red',
            });
          }else{
            Swal.fire({
              title: "PAGO EXITOSO!!",
              text: "Muchas gracias por su preferencia, " + nombres + ' ' + apellidos,
              icon: "success",
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              stopKeydownPropagation: false,
              confirmButtonColor: 'green',
            }).then(function() {
              window.location.href = 'index.html';
            });
          }
        }else{
          Swal.fire({
            title: "ERROR",
            text: "Colocar correctamente la CVV",
            icon:"error",
            allowOutsideClick: false,
            allowEscapeKey:false,
            allowEnterKey:false,
            stopKeydownPropagation: false,
            confirmButtonColor: 'red',
          });
        }
    }else{
      Swal.fire({
        title: "ERROR",
        text: "Colocar correctamente la FECHA DE VENCIMIENTO",
        icon:"error",
        allowOutsideClick: false,
        allowEscapeKey:false,
        allowEnterKey:false,
        stopKeydownPropagation: false,
        confirmButtonColor: 'red',
      });
    }
  }else{
    Swal.fire({
      title: "ERROR",
      text: "Colocar correctamente el NUMERO DE TARJETA",
      icon:"error",
      allowOutsideClick: false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation: false,
      confirmButtonColor: 'red',
    });
  }
});

btnPagar2.addEventListener('click', function() {
    var nombres2 = inputNombres2.value;
    var apellidos2 = inputApellidos2.value;
    var correoElectronico2 = inputCorreoElectronico2.value;
    var dirrecion2 = inputDirecccion2.value;
    var referencia2 = inputReferencia2.value;

    if (nombres2 === '' || apellidos2 === '' || correoElectronico2 === '' || dirrecion2 === '' || referencia2 === '') {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos",
        icon: "error",
        confirmButtonColor: 'red',
      });
    } else {
      var randomNumber = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
      Swal.fire({
        title: "PAGO EXITOSO!!",
        text: "Muchas gracias por su preferencia, " + nombres2 + ' ' + apellidos2,
        icon: "success",
        footer:'<span style="font-weight: bold; color: red;">Su número de pedido es: ' + randomNumber + '</span>',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        confirmButtonColor: 'green',
      }).then(function() {
        window.location.href = 'index.html';
      });
    }
  
});

// Obtener el valor del parámetro "total" de la URL
const urlParams = new URLSearchParams(window.location.search);
const total = urlParams.get('total');

// Mostrar el total en la página
const totalPagoElement = document.getElementById('totalPago');
totalPagoElement.textContent = `S/${total}`;


