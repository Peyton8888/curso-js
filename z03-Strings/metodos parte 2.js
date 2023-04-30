//metodos de cadenas de texto 02

let txto ="LeO"
let db="leo"

console.log (txto===db)
//metodo toUppercase y tolowwercase
console.log(txto.toLowerCase()===db.toLowerCase()) //minuscula
console.log(txto.toUpperCase()===db.toUpperCase()) //mayuscula

//concatenar
let tex1 ="hola";
let text2 ="mundo";

console.log(tex1.concat(text2))
console.log(tex1 + text2)
console.log(tex1, text2)
console.log(`${tex1} ${text2}`)


//eliminacion de espacios al final trim

let texto = "              hola soy un texto con espacios al final        "
console.log(texto.length)
console.log(texto.trim().length)
console.log(texto.trimStart().length)
console.log(texto.trimEnd().length)

//bbusqueda palabra 
let texto2 = "hola soy el string "

console.log(texto2.charAt(1))
console.log (texto2[1])


//obtener la posicion de una palabra dentro de una cadena de texto

let texto3 ="hola soy peyton y me gusta programar peyton peyton a peyton";

console.log(texto3.indexOf("peyton")); //inicio de la palabra
console.log(texto3.charAt(9)) //primera palabra
console.log(texto3.lastIndexOf("peyton")) //ultima palabra

