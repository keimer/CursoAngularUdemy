// Declaración de la interfaz
interface Xmen{
    nombre:string,
    poder:string
}

//Función con parametro de tipo Xmen, que fue definida con dos propiedades
// function enviarMision( xmen: {nombre:string} ) {  //otra manera no muy correcta de usar sin interfaces
function enviarMision( xmen:Xmen) {
    console.log(`Enviando a Misión ${xmen.nombre} con poder ${xmen.poder}`);
};

//Función con parametro de tipo Xmen, que fue definida con dos propiedades
function enviarCuartel( xmen:Xmen) {
    console.log(`Regresando al cuartel ${xmen.nombre}`);
};

//colocando como tipo de dato la interfaz se garantiza que solo podra userse las propiedades definidas en la Interfaz Xmen
let chicaBestia:Xmen = {
    nombre:"",
    poder:""
};
enviarMision(chicaBestia);
enviarCuartel(chicaBestia);