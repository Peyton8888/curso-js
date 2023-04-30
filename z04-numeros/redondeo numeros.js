//principales opciones aritmeticas

let num1 = 4.4;
let num2 =5.2;

//suma:
console.log(num1+num2);

//resta
console.log(num1-num2);

//multiplicacion
console.log(num1*num2)

//divicion
console.log(num1/num2)

let num = 4.4;
console.log(typeof(num));

//convertir valores numericos a strings
let str = num.toString();
console.log(str, typeof(str))



//redondear valores numericos y decimales

let d = 52.532323023;
let e = 4
//to fixed pedimos el numero de decimales que queremos que nos muestre

console.log(d.toFixed(3)) //depnde del valor que le dijitemos
console.log(e.toFixed(2))// si no tiene decimal agregamos con el valor


//to precicion, pedimos el numero exacto a mostrar
let f= e.toFixed(2)

console.log(e.toPrecision(6)); //le agrega decimales igualmente

//ambos salen strings
console.log(typeof(f));