var objeto1={
    nombre:"Luis",
    apellido:"Armijo",
    altura:170,
    cantidadLibro:20
}
var objeto2={
    nombre:"Shirley",
    apellido:"Coque",
    altura:165,
    cantidadLibro:20
}
var objeto3={
    nombre:"Claudia",
    apellido:"Bravo",
    altura:145,
    cantidadLibro:10
}
var objeto4={
    nombre:"Mario",
    apellido:"Cevallos",
    altura:180,
    cantidadLibro:21
}
var objeto5={
    nombre:"Armando",
    apellido:"Burgos",
    altura:175,
    cantidadLibro:25
}

//Recorrer un arreglo
var personas = [objeto1,objeto2,objeto3,objeto4,objeto5];
for(persona of personas){
    console.log(`${persona.nombre} ${persona.apellido}`);
}

//Filtro
const esAlta =(objeto)=>objeto.altura>=1.70;
var personasAltas = personas.filter(esAlta);

console.log(personasAltas);
for(persona of personasAltas){
    console.log(`${persona.nombre} ${persona.apellido}`);
}

var otrasPersonas =[
]

for(persona of personas){
    otrasPersonas.push({...persona})
}


//uSO DE map con arreglos
const pasarAltMetros =(objeto)=>{
    return objeto.altura /100;

}
otrasPersonas.map = (pasarAltMetros);
console.log(personas);
console.log(otrasPersonas);

//fUNCION REDUCE
const contabLibros =(acum, {cantidadLibro})=> acum+ cantidadLibro;
var totallLibros =personas.reduce(contabLibros, 0);
console.log(`La cantidad de libros en total es ${totallLibros}`);

