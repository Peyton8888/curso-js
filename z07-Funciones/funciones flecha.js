//Funciones

const array = [1,2,3,4,5,6,7,8,9];
const array2 = array.map(function(value) {
     return value * 2})
console.log(array2) //devuelve los valores multiplicados

// funcion flecha anonima
const array3 = array.map((valor) => valor *2)
console.log(array3)//devuelve los valores multiplicados

// funcion flecha
const array4 = a => a*2
console.log(array4(5))

//usndo la funcion array 4 en una lista con map

console.log(array.map(array4))

function traducional(valor) {
    return valor * 2
    
}
console.log(traducional(6))
