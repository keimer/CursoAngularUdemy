
// Uso de Let y Const
let nombrePersonaje = "Ricardo Tapia";
let edad = 23;

const PERSONAJE = {
  nombre: nombrePersonaje,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface Batman {
  nombre:string;
  artesMarciales:string[];
}

var batman:Batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a:number, b:number ){
  return (a + b) * 2;
}

let resultadoDobleFlecha = (a:number, b:number) => (a + b) * 2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  let mensaje:string;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
  base:number;
  altura:number;
  
  constructor(b:number, a:number){
    this.base = b;
    this.altura = a;
  }

  calcularArea():number {
    return this.base * this.altura;
  };

};

let restangulo = new Rectangulo(5, 3);
console.log(restangulo.calcularArea());