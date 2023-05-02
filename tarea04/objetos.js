// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datos ={
    nombre : "santiago",
    apellido: "huayhua",
    edad : 13,
    altura: 1.70,
    isdevelopper : true
}

// - Una variable que obtenga tu edad a partir del objeto anterior

const age = datos.edad
console.log(age)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const lista2 = [{...datos}];
console.log(lista2)

const mejoresa =[ 
{
    nombre : "Luis",
    apellido: "lupa",
    edad : 18,
    altura: 1.60,
    isdevelopper : false},

    {nombre : "juan",
    apellido: "name",
    edad : 17,
    altura: 1.70,
    isdevelopper : false
}]
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const lista3 = [...mejoresa]
console.log(lista3)

lista3.sort((a,b)=> a.edad -b.edad )
console.log(lista3)