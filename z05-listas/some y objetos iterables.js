//ver si algun objeto cumple la condicion

const lista = [234,2543,43,634,4,3,5,34,53,23,4344,654,756,856,87,56,7,578,64,563]

const list = lista.some(valor => valor ===64);
console.log(list)


const objetoslista = [
    {nombre: "peyton", edad:19},
    {nombre: "jtricks", edad:15},
    {nombre: "testy", edad:20},
    {nombre: "cargo", edad:14},
    {nombre: "godak", edad:17},
    {nombre: "peyton", edad:19},
]

const ob = objetoslista.some(valor1 => valor1.edad === 19)
console.log(ob)


//obtener una lista a partir de un objeto iterable

const str = "hola santiago";

console.log(str[0])
//objetos iterables
const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2,3,"hola",4])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = lista.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)
