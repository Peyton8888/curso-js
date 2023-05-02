//trabajando con objetos

const obj ={
    nombre: "santiago",
    edad: 17,
    isdevelvoper : true,
    lenguajes: ["javascript", "python", "java"],
    "number" : 949788695
}

//imprimiendo objetos

console.log(obj.nombre)
console.log(obj.edad)
//impresion de str en clave number
console.log(obj["number"])

//imprimir valones en variables
const prue = "edad";
console.log(obj[prue])

//copiando onjetos
const obj2 = obj;
obj2.nombre ="peyton";
//los objetos no pueden ser copiados de esta forma
console.log(obj.nombre)


//una buena forma de copari lso objetos es usando el sfacotr de propagacion

const obj4 = {...obj}
obj4.nombre = "testy";
//alli si no afectaria los valores del objeto principal
console.log(obj4.nombre)
console.log(obj.nombre) 


//ordenar objetos con funciones

const lista =[
{titulo: "avenger1" , age: 2018},
{titulo: "avenger2" , age: 2019},
{titulo: "avenger3" , age: 2016},
{titulo: "avenger4" , age: 2012}

]

console.log(lista)
//ordenando con sort()
lista.sort((a,b) =>a.age - b.age)
console.log(lista)

