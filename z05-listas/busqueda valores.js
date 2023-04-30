//iteracion de listas
const lista = [1,2,3,4,5,6,7,8,9];

// acceder a los valores de una lista poco eficiente
for(i = 0;i<lista.length;i++){
console.log (lista[i])}

//forma de acceder a una lista efficente
let suma =0;
lista.forEach(valor => {
suma += valor
console.log (valor) 
});
console.log(suma);


//buscar valores en una lista 
// buscar 9;

const valora= lista.find(valor=>
    {
        if (valor ===8){
        return true}
    });     

    console.log(valora)//retorna 8


const objetoslista = [
    {nombre: "peyton", edad:19},
    {nombre: "jtricks", edad:15},
    {nombre: "testy", edad:20},
    {nombre: "cargo", edad:14},
    {nombre: "godak", edad:17},
    {nombre: "peyton", edad:19},
]

let objetos = objetoslista.find(valor =>{
    if("jtricks"===valor.nombre){
        return true 
    }
})

console.log(objetos.edad);

//otro modo

const objetos2 = objetoslista.find(val => val.nombre ==="jtricks");
console.log(objetos2.edad)

//otro modo 
const {edad}= objetoslista.find(val => val.nombre ==="peyton");
console.log(edad)