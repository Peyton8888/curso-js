// Gestión de errores

const funcion = valor => {
    if(typeof valor==="number"){
        return 2 * valor;   
    }
    throw new Error("el valor debe ser de tipo numerro")
}
const numero = "fd";
try {  
    console.log("el programa se esta ejecutando correctamente");
    const doble = funcion(numero);
    console.log(doble)
    
}catch(error) {
    console.error(error)
    console.error("ERROR")
}
