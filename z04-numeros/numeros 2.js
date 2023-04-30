// valueof() sirve para inicializar un string o un mumero

//numero
//nuevo numero
let num =new Number(2);
let num2 = 4;
console.log(num)
//suma  da igual 6
console.log(num+num2)

console.log(num.valueOf() + num2.valueOf())
//se comprota como un numero normal
console.log(num.valueOf())


//en strings

let le = new String("hola mundo de ratas");
//nos devuelve cada letra como si fuera una posicion
console.log(le)

console.log(le.valueOf())//nos devuelve el string entero

//--------------------------------------------------------------
// Nan (not a number) - infinity

let a = 17;
let b = Number("gg");
console.log(a + b) //imprime nan por que estamos sumando etring con un numero

let c = 0;
//infinity

console.log(a/c) //imprime infinity por que al dividir con un numero pequeño

let d= null;
console.log(a/d);

//parse int - parse float - number - converciones

let x ="8888";
let y =3.3;
console.log (typeof(x))
console.log (x+y) //error , en ves de sumar concatena
console.log(Number(x) + y) //convierte le string en numero

//---------------------------------------------------------
let w ="5.5";

console.log(typeof(w));
console.log(parseInt(w))//coje solo los valores enteros
console.log(parseFloat(w));//coje todo los valores decimales

//_---------------------------------------------------------
//numero hexadecimal base (16)

let numH = "0x22b8";
console.log(typeof(numH))
console.log(parseInt(numH)) //8888 numero exadecimal

//valores minimos y maximos

let precicion = Number.EPSILON;
let min = Number.MIN_VALUE;
let mas = Number.MAX_VALUE;

console.log(precicion)
console.log(min)
console.log (mas)





