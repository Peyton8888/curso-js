// listas arrays o arreglos

const lista1 =[1, "hola", true, undefined, null]
// Definir segunda lista vacia
const lista2 =new Array(1, "hola", true, undefined, null)
//otro
const lista3 = new Array(4)
// agregar datos
lista3[0] =8888

// otro
const lista5 = [lista1, lista2,lista3]
//imprecion
console.log(lista1)
console.log(lista2)
console.log(lista3)
console.log(lista5)

//objetos
const movil = {
    altura : 70,
    anchura: 4,
    marca : "redmi",
    estado : true,
    amigos: ["peyton", "tricks", "Testy"],
    disco :{
        marca: "lenovo",
        costo : 1300
    }
}
console.log(movil.disco)

//fechas 

const fecha = new Date()
console.log(fecha)

const fecha2 = new Date(7000000000000002)// por milisegundos
console.log(fecha2)

const fecha3 = new Date("jul 29 2023 ")
console.log(fecha3)

const fecha4 = new Date("2005,07,29")
console.log(fecha4)

const dia = fecha.getDate()
const mes= fecha.getMonth()
const año = fecha.getFullYear()
console.log(dia, mes, año)
