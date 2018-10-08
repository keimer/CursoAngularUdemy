function Activar(obligatorio:string,
                  porDefecto:string = "Batiseñal",
                  opcional?:string){
  let mensaje:string;
  if ( opcional === undefined ){
    mensaje = `${ obligatorio } activó la ${ porDefecto }`;
  }else{
    mensaje = `${ obligatorio } activó la ${ porDefecto } en la ${ opcional }`;
  }
  console.log(`Funciones: ${mensaje}`);
}

Activar("Pinguino");
Activar("Keimer", "Alarma","Mañana bien temprano");

// Funciones flechas solucionan el problema del uso del this dentro del scope de una función
let nombre1:string = "Keimer";

let hulk = {
  nombre1 : "Hulk",
  smash(){
    setTimeout(function(){ 
      console.log( "Funciones: " + nombre1 + " smash!!!!!")
    },1500);
  },
  smashFlecha() {
    setTimeout( () => console.log("Funciones: " + this.nombre1 + " smash Flecha!!!!!"), 2000);
  }
}

hulk.smash();
hulk.smashFlecha();