function Activar(obligatorio:string,
                  porDefecto:string = "Batiseñal",
                  opcional?:string){
  let mensaje:string;
  if ( opcional === undefined ){
    mensaje = `${ obligatorio } activó la ${ porDefecto }`;
  }else{
    mensaje = `${ obligatorio } activó la ${ porDefecto } en la ${ opcional }`;
  }
  console.log(mensaje);
}

Activar("Pinguino");
Activar("Keimer", "Alarma","Mañana bien temprano");

// Funciones flechas solucionan el problema del uso del this dentro del scope de una función
let nombre:string = "Keimer";

let hulk = {
  nombre : "Hulk",
  smash(){
    setTimeout(function(){ 
      console.log( nombre + " smash!!!!!")
    },1500);
  },
  smashFlecha() {
    setTimeout( () => console.log(this.nombre + " smash Flecha!!!!!"), 2000);
  }
}

hulk.smash();
hulk.smashFlecha();