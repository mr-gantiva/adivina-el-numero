function holaMundo() {
  console.log("¡Hola, mundo!");
  return;
}

holaMundo();

function saludoNombre(nombre) {
  console.log(`¡Hola, ${nombre}`);
  return;
}

saludoNombre("Tobby");

function cuadradoDelNumero(numeroDeUsuario) {
  let numeroUsuario = prompt("Ingrese un número:");
  let calculo = numeroUsuario ^ 2;
  return calculo;
}
