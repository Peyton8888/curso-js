function* idgenedaror(){ //las funciones genedaroras tienen un * 
    let id = 0;
    while(true){
        id++;
        if(id >= 10){
            return
        }
        yield id //espera que la funcion se vuelva a llamar
    }
}

const gen = idgenedaror()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)



