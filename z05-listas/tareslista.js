const listaE = ["Arroz","Fideos","Atun","Azucar","Gelatina" ];
listaE.push("Aceite de Girasol")
console.log(listaE)
listaE.pop()
console.log(listaE)

const listpe = [
    
        {titulo: "Avengers: era de Ultrón", director : "Joss Whedon", fecha :"2010-04-30"},
        {titulo: "Avengers: Infinity WAr", director : " Anthony Russo, Joe Russo" , fecha: "2018-04-27"},
        {titulo: "Avengers: Endgame", director : "Anthony Russo, Joe Russo", fecha: "2000-04-30"}
    
]

const lstaob= listpe.filter(valor => (valor.fecha > "2010-01-01" ))
console.log(lstaob)

const lisdi = listpe.map((director)=>director.director )
console.log(lisdi)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const listi = listpe.map((titulo)=> titulo.titulo)
console.log(listi)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const lisc = lisdi.concat(listi)
console.log(lisc)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listapro = [ ...lisdi, ...listi]
console.log(listapro)