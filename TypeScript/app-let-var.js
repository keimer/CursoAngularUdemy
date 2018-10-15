// Se debe usar siempre let, no usar la palabra reservada var, no es recomendable.
// Las constantes siempre van en mayusculas y se deben inicializar al momento de crearlas.
var PI = 3.14;
var mensaje = "hola - variable mensaje inicial";
var mensaje2 = "Hola - variable mensaje2 inicial";
if (true) {
    var mensaje = "Adios - variable mensaje dentro del IF";
    var mensaje2_1 = "Mensaje2 - dentro del IF";
}
console.log(mensaje + " - constante PI = " + PI);
console.log(mensaje2 + " - constante PI = " + PI);
