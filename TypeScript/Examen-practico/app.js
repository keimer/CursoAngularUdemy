// Uso de Let y Const
var nombrePersonaje = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombrePersonaje,
    edad: edad
};
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a, b) {
    return (a + b) * 2;
}
(function (a, b) { return (a + b) * 2; });
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
}
;
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = /** @class */ (function () {
    function Rectangulo(b, a) {
        this.base = b;
        this.altura = a;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    ;
    return Rectangulo;
}());
;
var restangulo = new Rectangulo(5, 3);
console.log(restangulo.calcularArea());
