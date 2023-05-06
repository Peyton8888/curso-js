class Persona{  
    _nombre
    _apellido
    _edad
    constructor(nombre, apellido, edad){
        this._nombre = nombre,
        this._apellido = apellido,
        this._edad = edad;
    }

    getnombre(){
        return this._nombre
    }

    setnombre(nombre){
        this._nombre = nombre
    }
    
    saludo(){
        console.log(`mi nombre es ${this._nombre} mi apellido es ${this._apellido} mi edad es ${this._edad} `)
    }
}

class Desarrollador extends Persona{
    _lenguaje
    constructor(nombre, apellido, edad, leguaje){
        super(nombre, apellido, edad)
        this.leguaje = leguaje
    }
   
    saludo(){
        super.saludo()
        console.log(`mi lenguaje favorito es ${this.leguaje}`)
    }
}

const dep = new Desarrollador("s", "h" ,32, "java")
console.log(dep)
dep.saludo()