//trabajar con metodos mas avanzados
//.map

const lista = ["villas el salvador", "Ancon", "surco" , "Miraflores", "lurin"]

//leer datos
const lista2= lista.forEach(v =>{console.log(v) 
    return 4});
    // no retorna nada _¬
    console.log(lista2);

const lista3 = lista.map((v,i) => `${i +1} - ${v}`);
console.log(lista3)


const objetoslista = [
        {nombre: "peyton", edad:19},
        {nombre: "jtricks", edad:15},
        {nombre: "testy", edad:20},
        {nombre: "cargo", edad:14},
        {nombre: "godak", edad:17},
        {nombre: "peyton", edad:13},
    ]

//funciona pero no es recomendable
const listaobjetos2 = objetoslista.filter(obj => {
    if (obj.edad > 15){
        return true
    }else{
        return false
    }
})
console.log(listaobjetos2)
//imprime solo los mayores de 15
const lista1= objetoslista.filter(obj => (obj.edad >15) );
console.log(lista1);
//imprime todos menos testy y peyton 
const lista5 = objetoslista.filter(obj => (obj.nombre !=="peyton" && obj.nombre!== "testy"))
console.log(lista5) 


const nueval=[1,2,3,4,5,6,100]
const lista6 = nueval.reduce((acumulado, cur,  identificador, original) =>{
    console.log(acumulado)
    console.log(cur)
    console.log(identificador)
    console.log(original)
    return acumulado + cur
})
console.log(lista6)