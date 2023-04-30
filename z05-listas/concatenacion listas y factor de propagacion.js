let array = [8,8,8,8,8,];
let array2 = ["peyton","maning", "jtricks","testy","dudey"];

//concatenar en consola
console.log(array.concat(array2))
console.log(array);

let array3 = array.concat(array2);
console.log(array3);

// unir dos listas con el factor de propagacion
// el metodo de factor de propagacion hace que los valores de la lista
// se separen y de cierta forma ya no sean listas si no valores sueltos
let array4 = [...array,...array2];
console.log(array4)

//mal entendido factor factorial
let array5 = [array,array2];
console.log(array5)