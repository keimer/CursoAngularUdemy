var alfanumerico;
var numerico;
var booleano;
var fecha;
var cualquierTipo;
alfanumerico = "texto en una variable";
numerico = 123;
numerico = 123.45;
booleano = false;
fecha = new Date();
fecha = new Date('2018-10-07');
cualquierTipo = alfanumerico;
cualquierTipo = numerico;
cualquierTipo = booleano;
cualquierTipo = fecha;
// Objetos
var spiderman = {
    nombre: "Peter",
    edad: 20,
    poder: "Trepar paredes y lanzar telaraña"
};
//Usando Template literales del ES6 ``
var salida = alfanumerico + " -- " + numerico + " -- " + booleano + " -- " + fecha;
console.log("Tipo de datos: " + salida);
console.log("Tipo de datos: Variable \"cualquierTipo:any\" = " + cualquierTipo);
console.log(spiderman);
salida = alfanumerico + " -- \n" + numerico + " -- \n" + booleano + " -- \n" + fecha;
console.log("Template literales multilinea: " + salida);
// Template literales pueden ser usados para colocar codigo
function getAutor() {
    return "Keimer";
}
console.log("" + getAutor());
