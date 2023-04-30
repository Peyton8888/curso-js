//metodos de cadena de texto parte 3

//https://regexr.com

let texto = "habia una ves uan niña muy sansa llamada rosa maria hy era muy pero muy babosa xd"

console.log(texto.match(/d/g)) //saca todas las palabras
console.log(texto.includes("xd")) //ver si hay una palabra

//empieza con la letra 
console.log(texto.startsWith("h"))

//termina con la letra
console.log(texto.endsWith("d"))