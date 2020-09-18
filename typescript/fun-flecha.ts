
(function(){
    const miFuncion= function(a:string){
        return a;
    }
    const miFuncionF = (a:string) => a.toUpperCase();

    const suma= function( a:number, b:number){
        return a+b;
    }

    const sumaF =( a:number, b:number) => a+b;

    console.log(miFuncion('Normal'));
    console.log(miFuncionF('flecha'));

    console.log(suma(3,4));
    console.log(sumaF(5,6));

    const hulk = {
        nombre: 'hulk',
        smash(){
            setTimeout(()=>{
                console.log(`${this.nombre } smash!!!`);
            }, 1000 );                      
        }
    }

    hulk.smash();
    
})();



