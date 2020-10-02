var docente ={
    nombre:"Armando",
    apellido:"Burgos"
}
var docente2 ={
    nombre:"Guillermo",
    apellido:"Pizarro"
}

//Asignacion por paso de valor
var otroDocente ={
  ...docente
}


console.log(docente == docente2);
console.log(docente == otroDocente);
console.log(otroDocente.nombre);

//Asignacion por referencia
docente2 = otroDocente;

console.log(docente2 == otroDocente);
