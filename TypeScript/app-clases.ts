// Definir una clase
class Avenger {
    // Propiedades
    nombre:string = "Sin Nombre";
    equipo:string = undefined;
    nombreReal:string = undefined;
    puedePelear:boolean = false;
    peleasGanadas:number = 0;
    
    // Constructor
    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    
    // Métodos
    sumarPeleaGanada = () => {
        this.peleasGanadas += 1;
        return this.peleasGanadas;
    }

    restarPeleaGanada() {
        this.peleasGanadas -= 1 ;    
        return this.peleasGanadas ;    
    }
}

let antman:Avenger = new Avenger("Antman", "Cap", "Scott Lang");

antman.sumarPeleaGanada();
antman.sumarPeleaGanada();
antman.sumarPeleaGanada();
antman.restarPeleaGanada();

console.log(antman);