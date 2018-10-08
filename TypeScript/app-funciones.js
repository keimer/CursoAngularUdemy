function Activar(obligatorio, porDefecto, opcional) {
    if (porDefecto === void 0) { porDefecto = "Batiseñal"; }
    var mensaje;
    if (opcional === undefined) {
        mensaje = obligatorio + " activ\u00F3 la " + porDefecto;
    }
    else {
        mensaje = obligatorio + " activ\u00F3 la " + porDefecto + " en la " + opcional;
    }
    console.log("Funciones: " + mensaje);
}
Activar("Pinguino");
Activar("Keimer", "Alarma", "Mañana bien temprano");
// Funciones flechas solucionan el problema del uso del this dentro del scope de una función
var nombre1 = "Keimer";
var hulk = {
    nombre1: "Hulk",
    smash: function () {
        setTimeout(function () {
            console.log("Funciones: " + nombre1 + " smash!!!!!");
        }, 1500);
    },
    smashFlecha: function () {
        var _this = this;
        setTimeout(function () { return console.log("Funciones: " + _this.nombre1 + " smash Flecha!!!!!"); }, 2000);
    }
};
hulk.smash();
hulk.smashFlecha();
