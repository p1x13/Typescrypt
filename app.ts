
(()=>{

    const sumar = (a:number, b: number):number =>  a+b;
    
    const nombre = ():string => 'Hola Fernando';

    const obtenerSalario = ():Promise<string> =>{
        return new Promise((resolve,reject)=>{
            resolve('Fernando');
        })
    }
})();



