//Función con parametro de tipo Xmen, que fue definida con dos propiedades
// function enviarMision( xmen: {nombre:string} ) {  //otra manera no muy correcta de usar sin interfaces
function enviarMision(xmen) {
    console.log("Enviando a Misi\u00F3n " + xmen.nombre + " con poder " + xmen.poder);
}
;
//Función con parametro de tipo Xmen, que fue definida con dos propiedades
function enviarCuartel(xmen) {
    console.log("Regresando al cuartel " + xmen.nombre);
}
;
//colocando como tipo de dato la interfaz se garantiza que solo podra userse las propiedades definidas en la Interfaz Xmen
var chicaBestia = {
    nombre: "",
    poder: ""
};
enviarMision(chicaBestia);
enviarCuartel(chicaBestia);
