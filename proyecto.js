let numero = parseInt(
  prompt("Hola! cuantos numeros de la secuencia fibonacci deseas ver?")
);
let dia = prompt(
  "Ingrese dia de la semana y se le asignará el cristal correspondiente a la energia del dia"
);
let precio = 0;

function leerMas(dia) {
  if (dia === "lunes") {
    return "Moonstone";
  } else if (dia === "martes") {
    return "Jaspe Rojo";
  } else if (dia === "miercoles") {
    return "Citrino";
  } else if (dia === "jueves") {
    return "Malaquita";
  } else if (dia === "viernes") {
    return "Rodocrosita";
  } else if (dia === "sabado") {
    return "Turmalina";
  } else if (dia === "domingo") {
    return "Amatista";
  } else {
    return "no ha ingresado un dia de la semana todo en minusculas y sin tildes";
  }
}
console.log(leerMas(dia.toLowerCase()));

function fibonacci(numero) {
  let numeros = [0, 1];
  for (let i = 2; i < numero; i++) {
    numeros[i] = numeros[i - 2] + numeros[i - 1];
  }
  return numeros;
}
console.log(fibonacci(numero));


// 
function Producto (nombre, precio) {
  this.nombre = nombre
  this.precio = precio
}

const producto0 = new Producto("Moonstone", 2500);
const producto1 = new Producto("Jaspe Rojo", 1500);
const producto2 = new Producto("Citrino", 2000);
const producto3 = new Producto("Malaquita", 2500);
const producto4 = new Producto("Rodocrosita", 2000);
const producto5 = new Producto("Turmalina", 1500);
const producto6 = new Producto("Amatista", 1500);

//
const carrito = [
    {precio: 3500, producto: "Anillo"},
    {precio: 3000, producto: "Pulsera Black"},
    {precio: 4780, producto: "Dije punta de Cuarzo"},
];
console.log(carrito);

for(const producto of carrito){
    console.log(producto.precio);
    console.log(producto.producto);
};



carrito.forEach((producto) => {
    precio += producto.precio;
});
alert("Cristal del dia: " + leerMas(dia.toLowerCase()));
alert(`Este es el valor de tu carrito sorpresa: \$${precio}`);