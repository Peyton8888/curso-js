let lista = [1,2,3,4,8,3,3,4,5];

for (let i=0; i < lista.length; i++){
   
    if(lista[i]===4){
        continue;
    }
    console.log(lista[i])

    if(lista[i] > 8){
        
        break;
    }
}