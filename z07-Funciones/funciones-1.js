//declaraacion de funcionesa
saludar()
function saludar(){
    console.log("hola")
}

//cosn parametros
saludar2("santiago", "matias")

function saludar2(nombre , apellido){
    console.log(`hola ${nombre} ${apellido}`)
}

//cambiar variables
let nombre = "santiago"

despedida(nombre)
console.log(nombre)

function despedida(nombre) {
    nombre ="peyton"
    console.log(nombre) 
    
}

//funcione con objetos
let persona = { nombre:"santiago", apellido: "matias"}

datos(persona)
function datos(datos) {
    datos.apellido="alvarez"
    console.log(datos.nombre , datos.apellido)    
}

//funciones con parametros predifinidos
console.log(datos2())
function datos2(numero = 7){
    return(numero)
}

//funciones con factor de propagacion
param(3,4,5,"hola",{id:1424141})

function param(...numeros){
console.log(numeros)
}

//sumar numero con el factor de propagaciom
suma(8,7,5,4,3,7,8,9)
function suma(...numero) {
    console.log( numero.reduce((a,b)=> a + b))
    
}

//multiplicar
console.log(mutltiplicar(4,8))
function mutltiplicar(numero, numero2) {
    return numero * numero2
    }

//
let variable = "hola"

function restar(a=0, b=0) {
    console.log(variable);
    let variable_interna = "adios";
    console.log(variable_interna);
    return a - b
}

console.log(restar(85,6))