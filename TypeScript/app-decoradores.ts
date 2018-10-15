// Decorador es una función normal que adiciona funcionalidad a una clase usando la sintaxis siguiente:

function consola( constructor:Function){
    console.log( constructor );
}

@consola
class Villanos{
    constructor(public nombre:string){
    }
}
