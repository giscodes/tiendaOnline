let numero = parseInt(
  prompt("Hola! cuantos numeros de la secuencia fibonacci deseas ver?")
);
let dia = prompt(
  "Ingrese dia de la semana y se le asignará el cristal correspondiente a la energia del dia"
);
function leerMas(dia) {
  if (dia === "lunes") {
    return "piedra de la luna";
  } else if (dia === "martes") {
    return "jaspe rojo";
  } else if (dia === "miercoles") {
    return "citrino";
  } else if (dia === "jueves") {
    return "malaquita";
  } else if (dia === "viernes") {
    return "rodocrosita";
  } else if (dia === "sabado") {
    return "turmalina";
  } else if (dia === "domingo") {
    return "amatista";
  } else {
    return "no ha ingresado un dia de la semana todo en minusculas y sin tildes";
  }
}
console.log(leerMas(dia));

function fibonacci(numero) {
  let numeros = [0, 1];
  for (let i = 2; i < numero; i++) {
    numeros[i] = numeros[i - 2] + numeros[i - 1];
  }
  return numeros;
}
console.log(fibonacci(numero));
