function hola(nombre,fn_cb){
setTimeout(() => {
    console.log(`Hola soy ${nombre}.`);
    fn_cb(nombre);
}, 1000);
}

function hablar(fn_cb){
setTimeout(() => {
    console.log("Bla bla bla bla");
    fn_cb();
}, 1000);
}

function adios(nombre){
    console.log(`Adios ${nombre}`);
}

function dialogar(nombre,numero_veces){
    if(numero_veces>0){
        hablar(function(){
            dialogar(nombre,--numero_veces);
    })
}else{
    adios(nombre);
    console.log("Fin del comunicado")
}
}


console.log("Iniciando Conversacion");
hola("Armando",function(nombre){
    dialogar(nombre,4);
});

