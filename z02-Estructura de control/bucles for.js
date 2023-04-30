//Bucles for 
// for (inicialisacion, condicion, incremento)

// formas de incrementar
// i= i+1;
// i=+1
// i++

for (let i=0;i<10; i++){
    console.log(i)
}
    
//for leer lista
let lista = new Array("Jtriks", "8888" , "mosing" , "nagat")
    
for (let i=0 ; i<lista.length; i++){
    console.log(lista[i])
}
//leer numeros
let lista2 = new Array(3, 1 , 4 , 6)
    
for (let i=0 ; i<lista2.length; i++){
    console.log(lista2[i])
}
//for of
for (let valor of lista2){
    console.log(valor)
}

// forEach

lista.forEach(valor =>{
    console.log(valor)
})

// for in 

let persona ={
    nombre: "santiago",
    apellido: "huayhua",
    edad: 17,
    numero: 949788695,
    isDeveloper: true 
}

for (let propiedad in persona){
    console.log (propiedad)
    console.log(persona[propiedad])

    console.log(propiedad +" : "+ persona[propiedad])
}