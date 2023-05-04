import { suma,multiplicación } from "./module/controller.js";
import chalk from "chalk";

const color = chalk.bold.green;
const sumar = suma(4,5)
console.log(sumar)

const multiplicar = multiplicación(1,2);
console.log(color(multiplicar));



