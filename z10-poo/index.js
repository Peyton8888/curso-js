const persona = (nombre, apellido, isdevelore )=>{
 return {nombre,
apellido,
isdevelore,
saludo : function () {
    console.log("binevenido")}
}}

const nueva = persona("santiago",  "matias", "true");
console.log(nueva)