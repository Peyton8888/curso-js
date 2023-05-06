class Persona{
    // los privados solo se puede aceder dentro de las clase
    #nombre
    #apellido
    //el prtected solo se puede acceder dentro de las clases y clases desendientes
    _isdeveloper = true;
    constructor(nombre, apellido, edad){
        //privado -> #
        this.#nombre = nombre;
        this.#apellido = apellido;
        //protegido
        this._edad = edad;}
    saludar(){
        console.log(`bienvenido ${this.#nombre} mi edad es ${this._edad}` )
    }

    #obtenernombre(){
        return this.#nombre;
    }
    #obtenerapellido(){
        return this.#apellido;
    }

    obteneredad(){
        return this._edad ;
    }

    getNombre(){
        return this.#nombre
    }
    setNombre(nomb){
        this.#nombre = nomb
    }
}

const persona = new Persona("maria", "santiago" ,31);
console.log(persona.obtenereda)

//publico 
persona.saludar()

// #privado

// console.log(persona.obteneredad())

//getter -> te permite ver los atributos/metodos prvivados o protegidos 
//
console.log(persona.getNombre())

//setter -> te permite modificar los atributos /metodos privados y protegidos
persona.setNombre("juanito");
console.log(persona.getNombre())