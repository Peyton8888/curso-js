let usuario ="   SanTiaGo888 "
let contraseña = "SantiagO888"

let usuario1 = usuario.trim()
if (usuario1.toLowerCase() === "santiago888"){
    console.log(`hola ${usuario}`) 
    console.log(usuario1.charAt(0))

    contraseña=contraseña.replace("888","777")
    if(contraseña.toLowerCase() === "santiago777"){
        console.log("aprendisaje good");
    }else{
        console.log("incorrecto")
    }

}else{
    console.log("incorrecto")
}
