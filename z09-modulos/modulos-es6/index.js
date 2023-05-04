// import { suma, restar, nombre } from './modulos/matematicas.js';
// importar todo

//opcion 2
import * as madulomat from './modulos/matematicas.js';
// import lone_surviv from './modulos/surviv.js';
import lone_surviv, {color} from './modulos/surviv.js';
// const sum =  suma(4, 5);
// console.log(sum)

// const rest = restar(87,43);
// console.log(rest)

// console.log(nombre)

//opcion 2
const sum =  madulomat.suma(4, 5);
console.log(sum)

const rest =madulomat.restar(87,43);
console.log(rest)

// console.log(nombre)


console.log(lone_surviv())
console.log(color)