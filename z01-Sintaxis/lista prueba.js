//probando conocimeinto
const lista1 =["Jtricks", 8888, "Testy" , true ]
const lista2 = new Array("hola mundo ", 8888)
const lista3 = new Array(4)
lista3[0]="testy duddey"
lista3[1]="testy duddey"
lista3[2]="testy duddey"

const lista4 = [lista1, lista2,lista3]

//imprimir
console.log(lista1)
console.log(lista2)
console.log(lista3)
console.log(lista4)

//objetos
const cosas={
    "nombre-cel": "xiaomi redmi 9c",
    "nombre":"santiago",
    "apellido": "huayhua yarihuaman",
    "edad": 17,
    pokemonesfavoritos:["Gengar", "Deciduelle", "chimchar"],
    "juegos favoritos":["pokemon unite", "Free Fire", "Surviv.io"],
    armas:{
        arma1: {
            awms: "daño: 8888",
        },
        arma2: {
            sv: "daño: 888"
        },
        arma3: {
            mosing: "daño: 88"
        }
    }
}
console.log(cosas.pokemonesfavoritos[1])
console.log(cosas.apellido)
console.log(cosas.armas.arma1.awms)
console.log(cosas.armas.arma2)
console.log(cosas.armas.arma3.mosing)

//datos

const fecha = new Date()
console.log(fecha)

const fecha1 = new Date(5000)
console.log(fecha1)

const fecha3 = new Date(25-07-2002)
console.log(fecha3)

const fecha4 = new Date(05,29,2005)
console.log(fecha4)

const fecha5 = new Date("Apr 27 2020")
console.log(fecha5)

const dia = fecha.getDay();
const mes = fecha.getMonth();
const año = fecha.getFullYear();
const horas = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos = fecha.getSeconds();

console.log(dia, mes, año,horas,minutos,segundos )












