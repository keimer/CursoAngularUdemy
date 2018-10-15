var avenger = {
    nombre: "Steve",
    clave: "Capaitan America",
    poder: "Droga"
};
var nombreHero = avenger.nombre;
var claveHero = avenger.clave;
var poderHero = avenger.poder;
console.log(nombreHero + " - " + claveHero + " - " + poderHero);
// Usando Destructuración de objetos (No importa el orden sino los nombres de las propiedades, colocar let { propiedad:string } es un alias y no un tipo de datos)
var clave = avenger.clave, poder = avenger.poder, nombre = avenger.nombre;
console.log("Destructuraci\u00F3n Objetos: " + nombre + " - " + clave + " - " + poder);
// Usando destructuración de Arreglos (Importa el orden de acuerdo al indice del arreglo)
var avengers = ["Thor", "Steve", "Tony"];
var Thor = avengers[0], capi = avengers[1], iroman = avengers[2];
console.log("Destructuraci\u00F3n Arrays: " + Thor + " - " + capi + " - " + iroman);
var iroman2 = avengers[2];
console.log("Destructuraci\u00F3n Arrays: " + iroman2);
