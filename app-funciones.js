"use strict";
function Activar(obligatorio, porDefecto, opcional) {
    if (porDefecto === void 0) { porDefecto = "Batiseñal"; }
    if (opcional === undefined) {
        var mensaje_1 = obligatorio + " activ\u00F3 la " + porDefecto;
    }
    else {
        var mensaje_2 = obligatorio + " activ\u00F3 la " + porDefecto + " en la " + opcional;
    }
    console.log(mensaje);
}
Activar("Pinguino");
