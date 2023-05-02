//setes y conjuntos

const lista = [1,2,3,4,5,6,7,8,9,3,4,3,1];
console.log (lista);
//set es para sabe rsi una lista tiene valores unicos
const myset = new Set (lista)
console.log(myset)

//añadir valor
console.log(myset);
myset.add(90)
myset.add(80)

console.log(myset);

//eliminar valores
console.log(myset);
myset.delete(1)
console.log(myset);

//eliminar todos los vlaorees
console.log(myset);
// myset.clear()
// console.log(myset);

//saber si contiene un valor
console.log(myset);
console.log(myset.has(5))

//saber tamaño
console.log(myset);
console.log(myset.size)


//iterar

myset.forEach(valor => {
    console.log(valor)
})

//objeto iteraitor 
const it_set = myset.values();
console.log(it_set)

//volver a una lista sin repeticiones

const mysetli = [...myset];
console.log(mysetli)
