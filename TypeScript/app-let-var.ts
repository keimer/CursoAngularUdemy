// Se debe usar siempre let, no usar la palabra reservada var, no es recomendable.
// Las constantes siempre van en mayusculas y se deben inicializar al momento de crearlas.

const PI = 3.14;
var mensaje = "hola - variable mensaje inicial";
let mensaje2 = "Hola - variable mensaje2 inicial";

if (true){
  var mensaje = "Adios - variable mensaje dentro del IF";
  let mensaje2 = "Mensaje2 - dentro del IF"
}

console.log(`${mensaje} - constante PI = ${PI}`);
console.log(`${mensaje2} - constante PI = ${PI}`);