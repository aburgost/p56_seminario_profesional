async function hola(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
         console.log(`Hola soy ${nombre}`) 
         resolve(nombre);  
        }, 1000);
    })
}
async function hablar(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
console.log("Bla bla bla bla ...");
resolve(nombre);
        },1000)
})
}
async function adios (nombre){
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            console.log( `Adiós ${nombre}.` )
            resolve( )
        }, 1000 )
    } )}
async function dialogar(){
    let nombre=await hola("Armando");
await hablar()
await hablar()
await hablar()
await hablar()
await hablar()
await adios(nombre)
}
console.log("Iniciando conversacion");
dialogar();