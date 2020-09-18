
(()=>{
   
    //requisitos a cumplir
    //forma de definir reglas
    interface Xmen {
        nombre: string,
        edad: number,
        //Opcional para los objetos
        poder?:string
    }
    //Para poder acceder a los metodos tiene que ser de tipo Xmen
    const enviarMision = (xmen:Xmen)=>{
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    }

    const regresarAlCuartel = (xmen:Xmen)=>{
        console.log(`Regrasando a ${xmen.nombre} al cuartel`);
    }

    //Al construir nos aseguramos que cumpla con los requisitos de tipo Xmen
    const wolverine:Xmen = {
        nombre: 'Logan',
        edad:   60
    }

    enviarMision(wolverine);
    regresarAlCuartel(wolverine);



})();



