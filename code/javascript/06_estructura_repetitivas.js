let persona = {
    nombres: "Armando Jose",
    apellidos: "Burgos Sandoval",
    email: "aburgos@est.ups.edu.ec",
    edad: 22 ,
    peso: 150
}

const META =persona.peso-10;

const INCREMENTAR_PESO = 3;
const DECREMENTAR_PESO = 2;

const aumentarPeso =(persona)=>persona.peso+= INCREMENTAR_PESO

const disminuyePeso =(persona)=>persona.peso+= DECREMENTAR_PESO

const comeMucho =()=>Math.random()< 0.1

const realizaDeporte =()=>Math.random()<0.8

console.log(`Al iniciar el año ${persona.nombres} pesa ${persona.peso}`);

while(persona.peso>META){
if (comeMucho()){
 aumentarPeso(persona);
}
if(realizaDeporte()){
disminuyePeso(persona);
}
}

console.log(`Al final del año ${persona.nombres} pesa ${persona.peso}`);