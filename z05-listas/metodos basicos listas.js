//trabajando con listas (arreglos ,arrays , vectores)
let valor=8 ;
let arrays = [1,{id:8888},3,4,valor,6,false,8,"peyton"];
console.log (arrays); 

//acceder alos valores de una array a traves de su posicion
console.log(arrays[1])
console.log(arrays[8])
console.log(arrays[4])

//metodos para introducir nuevos valores
// arrays[9]="hola";
//.push() y unShitf se usan para aagregar elementos a una lista
// Añade uno o más elementos al final de un array.
arrays.push("hello", "mundo","joven",8888);
console.log(arrays)

//valores al principio unShift
arrays.unshift(8,8,8,8)
console.log(arrays)

//eliminar valores al principio
const arrays2 =[8, "peyton", 7, "xd", 6,"gg",8888]
// pop->elimina valores al final
// elimina 2 valores
arrays2.pop()
arrays2.pop()

console.log(arrays2)
//shift -> elimina valores al principio
arrays2.shift()
arrays2.shift()

console.log(arrays2)


//metodo para eliminar , modificar y añadir valores en nuestro
// array - .splice(x,y,z)
const array3 = [0,1,2,3,4,5,6,7,8]
//aliminar del indice - a valor que le otorguemos
array3.splice(5,2)
//imprime 0,1,2,3,4,7,8
console.log(array3)

// añadir valores
// (indice, valores a eliminar, agregar)
array3.splice(3,0,"13")
console.log(array3)
array3.shift()

//modificar o cambiar valores
//indice - elimina un valor - agrega despues de la posicion elegida
array3.splice(2,1,3,4)

console.log(array3)