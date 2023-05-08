const boton = document.querySelector("#btn")

boton.addEventListener("click", ()=>{
    // alert("se ha hecho click")

    //operador ternario
    // confirm("estas de acuerdo")
    // ? console.log("ok")
    // : console.log("noo")

        const respuesta = confirm("estas seguro")
    if(respuesta){
        console.log("ok")
    }else{
        console.log("no")
    }
})

const botoninfo = document.querySelector("#info")
botoninfo.addEventListener("click",()=>{
    const nombre = prompt("cual es tu nombre?")


    if(nombre){
    console.log("tu nombre es " +nombre)
    }
    else{
        console.log("no ha introducido nada")
    }

   
})

 const lista =[{
        nombre: "santiago",
        edad : 27
    },
{
    nombre:"peyton",
    edad:18
},
{
nombre:"jtrick",
edad:18
}
]
console.table()