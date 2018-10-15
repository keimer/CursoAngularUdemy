let prom1 = new Promise(function (resolve, reject){
    setTimeout(() => {
        console.log("Finalizó ejecución asincrona");
        
        //Simula cuando la función asincrona termina BIEN
        // resolve();

        //Simula cuando la función asincrona termina con ERRORES
        reject();

    }, 1500);

});

console.log("Paso1");

prom1.then(
    function(){
        console.log("Ejecutarme cuando termine BIEN la ejecución Asincrona")
    },
    function(){
        console.error("ERROR: Ejecutarme cuando termine -- MAL -- la ejecución Asincrona")
    }
);

console.log("Paso2");