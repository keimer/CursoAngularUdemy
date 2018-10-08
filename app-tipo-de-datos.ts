let alfanumerico:string;
let numerico:number;
let booleano:boolean;
let fecha:Date;
let cualquierTipo:any;

alfanumerico = "texto en una variable";
numerico = 123;
numerico = 123.45;
booleano = false;
fecha = new Date();
fecha = new Date('2018-10-07');

cualquierTipo = alfanumerico;
cualquierTipo = numerico;
cualquierTipo = booleano;
cualquierTipo = fecha;

// Objetos
let spiderman = {
  nombre : "Peter",
  edad : 20,
  poder : "Trepar paredes y lanzar telaraña"
}

//Usando Template literales del ES6 ``
let salida = `${alfanumerico} -- ${numerico} -- ${booleano} -- ${fecha}`;

console.log(salida);
console.log(`Variable "cualquierTipo:any" = ${cualquierTipo}`);
console.log(spiderman);

salida = `${alfanumerico} -- 
${numerico} -- 
${booleano} -- 
${fecha}`;
console.log(`Template literales multilinea: ${salida}`);

// Template literales pueden ser usados para colocar codigo
function getAutor(){
  return "Keimer";
}
 console.log(`${ getAutor() }`)