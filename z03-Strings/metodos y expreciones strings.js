//metodos usados con string
//longitud de texto
let str ="hola soy un strings";
console.log(str.length);

//obtener partes
//metodos
//slice(inicio,final), subString(),substr()

let slice_str =str.slice(0,5);
console.log(slice_str)

let subString_str = str.substring(0,5)
console.log(subString_str)

let substr_str = str.substr(5,10)
console.log(substr_str)



//replace cambia el primer valor

let nombre ="santaigo matias hy manign"
console.log(nombre.replace("santaigo","santiago"))

let frase ="mosing spas awms mosing sv mosing apas scot elite mosing"
console.log(frase.replace("mosing", "mac10"))

//exprecion regulares global /g(global)
console.log(frase.replace(/mosing/g, "mac10"))


