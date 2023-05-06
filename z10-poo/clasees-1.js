//funciones una clase es un metodo y las variabels son atributos
//this hace referencia al bojeto en el cual esta

class Persona{
    constructor(nombre, apellido, edad, isdeveloper){
        this.nombre =nombre;
        this.apellido =apellido;
        this.edad = edad;
        this.isdeveloper = isdeveloper;
    }
    saludar(){
        console.log(`bienvenido ${this.nombre}` )
    }
}

const persona1 = new Persona("santiago", "matias", 17, true);
console.log(persona1)
console.log(persona1 instanceof Persona)
persona1.saludar()

//diferencia en inicialezar y declarar

let num =33;
let persona2 = new Persona("maria", "tomairo", 46, false)
console.log(persona2)

//for in
for (const key in persona1) {
    console.log(key)
    console.log(persona1[key])
}
