// bucle for normal

for (let e=0; e < 10; e++){
    console.log(e)
}

const list2 = [1,2,3,"peyton", "maning"]

const lista = new Array()
lista[0]=2
lista[1]="Jtricks"
lista[2]="Peyton"
lista[3]=243
lista[4]=256
lista[5]=65
// for normal
for (let a=0;a<lista.length;a++){
    console.log(lista[a])
}
//  foreach
lista.forEach(valor => {
    console.log(valor)
    
});

const info ={
    nombre : "santiago",
    apellido: "matias",
    edad : 17,
    isDeveloper : true,
    mascotas : ["toto", "corali", "silver"]
} 


for (let item in info){
    console.log(item +": "+ info[item])  
}


list2.forEach(ejem => {
    console.log(ejem)
});
