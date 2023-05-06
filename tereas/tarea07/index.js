import { suma,multiplicación } from "./module/controller.js";
import chalk from "chalk";

const color = chalk.bold.green;
const sumar = suma(4,5)
console.log(sumar)


console.log(color(multiplicación(suma(1, 2), suma(4, 5))));

// correcion
// respuesta correcta
console.log(color(multiplicación(suma(1, 2), suma(4, 5))));





