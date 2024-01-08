function hola(callback) {
    setTimeout(() => {
        console.log("Hola");
        callback();
    }, 1000)
}

function adios (otrocallback){
    setTimeout(() => {
        console.log('adios');
        otrocallback();
    }, 1000);
}


// CUERPO PRINCIPAL







console.log('arrancando proceso');
hola(function(){
    adios(function(){
        console.log('terminando proceso');
    })
    
});