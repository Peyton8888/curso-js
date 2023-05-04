// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
// - Registra el error en un archivo a través de un try...catch
const logger = require('./logger')

const funcion = valor => {
    if(typeof valor==="number"){
        return 2 * valor;   
    }
    throw new Error("el valor debe ser de tipo numerro")
}
const numero = "fd";
try {  
    logger.log("el programa se esta ejecutando correctamente");
    const doble = funcion(numero);
    logger.log(doble)
    
}catch(error) {
    logger.error(error)
    logger.error("ERROR")
}
