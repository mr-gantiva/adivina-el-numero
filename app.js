let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Ingresa un número del 1 al ${numeroMaximo}`);
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
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Consultar si ya fueron sorteados todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    //Si el número generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
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
