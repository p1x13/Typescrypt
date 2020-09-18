
(function(){
function activar(
    quien   : string, 
    momento?: string,
    objeto  : string = 'batiseñal' ){
        
    if( momento) {
    console.log(`${quien} activò la `+ `${objeto}` + ` en la ${momento}`);
    } else {
    console.log(`${quien} activò la `+ `${objeto}`);
    }
}

activar('Gordon','tarde');

})();



