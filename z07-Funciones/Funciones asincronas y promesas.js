// funciones sincronas y promesas

function miasinc(){
    //llamadas a bases de datos
    // darnos algunos errores
}

//promesas

const mipromesa = new Promise((resolve, reject)=>{
    const i = Math.floor(Math.random() *2)
    if(i !== 0){
        resolve() //.then
    }else{
        reject()  //.catch
    }
})

mipromesa
    .then(() => console.log("salio muy bien"))
    .catch(() => console.log("ERROR"))
    .finally(()=> console.log("esto se ejecura siempre"));