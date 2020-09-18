
(()=>{

    console.log('Inicio');

    //Promesas para manejo se crea y establece despues del inicio
    const prom1 = new Promise((resolve,reject )=>{

        setTimeout(()=>{
            reject('Se termino el timeout');
        },1000);
    });

    //Lo que se quiere ejecutar al resolver o rechazar la promesa, no impide cargar las siguientes lineas
    prom1
        .then( mensaje => console.log(mensaje))
        //manejador de errores para no detener codigo
        .catch(err => console.warn(err));

    //Se imprime antes de la promeda, pues esta tiene un setOut
    console.log('Fin');
})();



