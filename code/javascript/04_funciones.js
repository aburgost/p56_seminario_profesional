var nombreapellido="Armando Burgos";
var edad =23;

//funcion declarativa
function imprimiredad(nombre,edad){
    console.log(`${nombre} tiene la edad de ${edad}.`)
};

//funcion flecha
var imprimiredad2=(nombre,edad) =>{console.log(`${nombre} tiene la edad de ${edad}.`)
};

//funcion expresiva
var imprimiredad3 =function(nombre,edad){
    console.log(`${nombre} tiene la edad de ${edad}.`)
}
imprimiredad(nombreapellido,edad);
imprimiredad("Armando Burgos",23);
imprimiredad2(nombreapellido,edad);
imprimiredad3("Josefina",15);