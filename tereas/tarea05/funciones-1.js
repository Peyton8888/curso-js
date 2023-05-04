// - Una función sin parámetros que devuelva siempre "true"

function verdaro() {
    return true
}
console.log(verdaro())

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function holaPromesa() {
    return new Promise(resolve => {
    setTimeout(() => {
        console.log("Hola soy una promesa");
        resolve();
    }, 5000);
    });
}
holaPromesa();
// - Una función generadora de índices pares automáticos

function* generadori(){
    let  i = 0;
    while(true){
        yield i
        i +=2;
       
        
    }
}
const gen = generadori()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


// solucion

function devuelveTrue() {
    return true
}

async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}



