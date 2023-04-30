let lista = new Array();
lista[0]= "a";
lista[1]= "b";
lista[2]= "c";
lista[3]= "d";
lista[4]= "e";

for (let i=0;i <lista.length; i++){
    console.log(lista[i])
}

for ( let valor of lista){
    console.log(valor)
}

lista.forEach(items =>{
    console.log(items)
})

const objetos={
    nombre : "Santiago",
    apellidos : "huayhua",
    edad: 17,
    pais : "Peru",
    numero : 949788695,
    mascotas :["luna", "hachi", "toto", "silver"]
}

for (a in objetos){
    console.log(a);console.log(objetos[a])
}

let contador = 0;

while (contador < 10){
    console.log(contador)
    contador++
}

do {
    console.log("holaaaaa");
    console.log(contador);
    contador++;
} while (contador < 6);{
    console.log(contador)
}