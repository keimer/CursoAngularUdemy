// Definir una clase
var Avenger = /** @class */ (function () {
    // Constructor
    function Avenger(nombre, equipo, nombreReal) {
        var _this = this;
        // Propiedades
        this.nombre = "Sin Nombre";
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        // Métodos
        this.sumarPeleaGanada = function () {
            _this.peleasGanadas += 1;
            return _this.peleasGanadas;
        };
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.restarPeleaGanada = function () {
        this.peleasGanadas -= 1;
        return this.peleasGanadas;
    };
    return Avenger;
}());
var antman = new Avenger("Antman", "Cap", "Scott Lang");
antman.sumarPeleaGanada();
antman.sumarPeleaGanada();
antman.sumarPeleaGanada();
antman.restarPeleaGanada();
console.log(antman);
