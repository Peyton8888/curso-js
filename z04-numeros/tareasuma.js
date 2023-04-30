//- Ejercicio Numeros de Open boot camp

let altura = 170;
//- Una variable que contenga tu altura en metros (número de coma flotante)
let altura_me = 1.75;
//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 61.4;
//- Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_met = altura_me.toFixed()
console.log(altura_met)

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_re = peso.toFixed()
console.log(peso_re)


//aumentar altura
const altura_red = Math.ceil(altura)
//disminuis altura
const peso_red = Math.floor(peso)
console.log(altura_red)
console.log(peso_red)

const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE