let unidades = 0;
let descenas = 0;

bucleDecenas: while(true){
    bucleUnidades: while(true){
    console.log('numeros actuales:' ,{descenas} ,{unidades});
    
        unidades++;
        if (unidades === 10){
            unidades =0;
            break bucleUnidades;
        }
    }
    descenas++
    if (descenas === 2){

    break bucleDecenas;}
}