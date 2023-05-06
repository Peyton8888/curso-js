
class Estudiante{
    nombre="santiago"
    lemguajes =["Javascript", "HTML", "CSS"];
    
    obtendatos(){
        return {nombre :this.nombre, apellido: this.lemguajes}
    }
}
const estudiante = new Estudiante()
console.log(estudiante.obtendatos())
