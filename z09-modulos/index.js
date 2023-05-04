// 1 forma de importar
// const moduloma = require("./modulos/matematicas.js")
// console.log (moduloma)

//nueva notacion

const {factorial, suma, restar} = require("./modulos/matematicas.js")
//primera funcion
// let facto = moduloma.factorial(5);
// console.log(facto)
// let sum =moduloma.suma(4,3);
// console.log(sum)

// segunda forma

let facto = factorial(5);
console.log(facto)
let sum =suma(4,3);
console.log(sum)
