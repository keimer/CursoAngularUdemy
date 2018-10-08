let avenger = {
  nombre : "Steve",
  clave : "Capaitan America",
  poder : "Droga"
}

let nombreHero:string = avenger.nombre;
let claveHero:string = avenger.clave;
let poderHero:string = avenger.poder;

console.log(`${nombreHero} - ${claveHero} - ${poderHero}`);

// Usando Destructuración de objetos (No importa el orden sino los nombres de las propiedades, colocar let { propiedad:string } es un alias y no un tipo de datos)
let { clave, poder, nombre } = avenger;

console.log(`Destructuración Objetos: ${nombre} - ${clave} - ${poder}`);

// Usando destructuración de Arreglos (Importa el orden de acuerdo al indice del arreglo)
let avengers:string[] = ["Thor", "Steve", "Tony"];

let [ Thor, capi, iroman ] = avengers;

console.log(`Destructuración Arrays: ${Thor} - ${capi} - ${iroman}`)

let [ , , iroman2 ] = avengers;

console.log(`Destructuración Arrays: ${iroman2}`)