//comparando listas

const arr = [1,2,3,4]
const arr2 = [1,2,3,4]
const arr3 = [1.2,3,4]

console.log(arr === arr2) //sale false

const comparar = (array1, array2)=> {
    if (array1.length !== array2.length) return false
        const res = array1.every((valor,i) =>valor === array2[i])
        return res
}
console.log(comparar(arr,arr2))