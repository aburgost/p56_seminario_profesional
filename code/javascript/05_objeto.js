var docente1 = {
    nombre: "Gillermo",
    apellido: "Pizarro",
    afiliacion: "Universidad Politecnica Salesiana",
    email: "gpizarro@ups.edu.ec"
}
var docente2 = {
    nombre: "Juan",
    apellido: "Andrade",
    afiliacion: "Universidad Politecnica Salesiana",
    email: "jandrade@ups.edu.ec"
}

function imprimirnombreMayus(objeto){
    var {nombre} =objeto;
    console.log( `${nombre.toUpperCase()} ${objeto.apellido}` );
}

function imprimirApellidoMayus({apellido}){
    console.log( `${apellido.toUpperCase()}` );
}

imprimirnombreMayus(docente1);
imprimirApellidoMayus(docente2);
