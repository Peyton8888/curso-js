//trabajando con fechas
//año-mes-dia-hora-minutos-segundo
const fecha = new Date(2005,06,29,12,30,13)
console.log(fecha)

//a traves de milisegundos

const fecha2 = new Date(1911200000000)
console.log(fecha2)

//a treaves de strings
const fecha3 = new Date("29 july, 2005 12:30:13")
console.log(fecha3)

//comparar si las fechas son iguales
const fecha4 = new Date(2005,06,29,12,30,13)
console.log(fecha4)

//no se compara las fechas asi
console.log(fecha === fecha4)

//solucion

console.log(fecha.getTime() === fecha.getTime())


// optener dia

console.log(fecha.getDate())

//obtener mes

console.log(fecha.getMonth())

//obtener año

console.log(fecha.getFullYear())

//fechas 

console.log(fecha.toLocaleDateString("en-Us"))