var persona={
    nombre:"Luis",
    apellido:"Rodriguez",
    edad:25,
    universidad:"Universidad Politécnica Salesiana",
    email: "lrodriguez@est.ups.edu.ec",
    ingeniero: true,
    master: false,
    doctor: false
}

function imprimirPersona(objeto){
console.log(`${objeto.nombre} ${objeto.apellido}`);
console.log(`Edad : ${objeto.edad} años.`);
console.log(`Universidad : ${objeto.universidad}`);
console.log(`Email : ${objeto.email}`);
if (objeto.ingeniero){
    console.log("Es ingeniero");
}
if (objeto.master){
    console.log("Es Master");
}
if (objeto.doctor){
    console.log("Es Doctor");
}
}
imprimirPersona(persona);

//Swicth
opcion =2;

switch(opcion){
    case 1:
        console.log("Caso 1");
        break;
    case 2:
        console.log("Caso 2");
        break;
}