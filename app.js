let numeroSecreto = 0;
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", "Ingresa un número del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  asignarTextoElemento("h4", `Intento: ${intentos}`);

  if (numeroDeUsuario == numeroSecreto) {
    asignarTextoElemento(
      "p",
      `👍Acertaste el número en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "⬇️El número secreto es menor");
    } else {
      asignarTextoElemento("p", "⬆️El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function reiniciarJuego() {
  //Limpiar la caja
  limpiarCaja();
  //Indicar mensaje de inicio
  //Generar el número aleatorio
  //Inicializar el número de intentos
  condicionesIniciales();
  //Deshabilitar el boton Nuevo Juego
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
