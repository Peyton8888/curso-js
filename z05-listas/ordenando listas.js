//ordenar valores numericos con .sort

const lista =[23,43,5,4,3,2,3,2,43,54,43,3,4,3,];
lista.sort((a,b) => a - b);
console.log(lista)


const objetoslista = [
    {nombre: "peyton", edad:19},
    {nombre: "jtricks", edad:15},
    {nombre: "testy", edad:20},
    {nombre: "cargo", edad:14},
    {nombre: "godak", edad:17},
    {nombre: "peyton", edad:19},
]
objetoslista.sort((a,b) => a.edad - b.edad);

console.log(objetoslista)