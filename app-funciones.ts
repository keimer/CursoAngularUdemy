function Activar(obligatorio:string,
                  porDefecto:string = "Batiseñal",
                  opcional?:string){
  
  if ( opcional === undefined ){
    let mensaje = `${ obligatorio } activó la ${ porDefecto }`;
  }else{
    let mensaje = `${ obligatorio } activó la ${ porDefecto } en la ${ opcional }`;
  }
  console.log(mensaje);
}

Activar("Pinguino");