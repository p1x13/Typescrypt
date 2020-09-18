
(()=>{
   
    const avenger={
        nombre:'Steve',
        clave: 'Capitán América',
        poder: 'Drogas'
    }
    
    //Extraccion de porpiedades del opjeto, DESESTRUCTURACIÓN
    const {nombre,clave,poder} = avenger;

    console.log(nombre);
    console.log(clave);
    console.log(poder);

    //desestructuración dentro del argumento 
    const extraer = ({clave,poder}:any)=>{
        console.log(clave);
        console.log(poder);
    }

    //Extracción de avenger 
    extraer(avenger);

    const avengers: string[]=['Thor','Iron-Man','Spiderman'];
    
    //Desestructuración de arreglos ORDEN
    const[loki,iron,spider]=avengers;
    //Desestructuracion solo de algunos elementos se separa con comas ORDEN
    const[,,spider1]=avengers;

    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);

    //Extraer arreglo con flecha

    const extraerArr = ([thor,hierro,arana]:string[])=>{
        console.log(thor);
        console.log(hierro);
        console.log(arana);
    }

    extraerArr(avengers);
})();



