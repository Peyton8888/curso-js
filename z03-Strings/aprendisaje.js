// backtis con for 

for (let i =0; i<10;i++){
    console.log(`el  numero es ${[i]*2}`)
}

for(let i =0; i<10;i++){
    console.log("hola el \"numero es\" " ,i )

}



for (let i=0; i<10;i++){
    let hello ="soy un while cdddd while"
    
    console.log (hello.replace('while', 'for'));
    console.log (hello.replace(/while/g, 'for'));
    console.log (hello.substring(0,4))
    console.log (hello.substr(0,4))
    console.log (hello.slice(0,3))











}
    for (let e = 0; e<10; e++){
    let nm= "santiago";

    let texto = `xd ${nm} tiempo de espera es ${[e]}`;
    console.log (texto.replace("xd", "hola"))
    }


    for (let i =0; i <10;i++){
        let tx= "xd a gg 88 pp aa xd gg xd c xdd xd v xd a dx dx xd"

        console.log(tx.replace("xd","json"));

        console.log(tx.replace(/xd/g ,"json").slice(0,4))
        
        console.log(tx.slice(0,2))
        console.log(tx.substring(0,2))
        console.log(tx.substr(0,2))
        console.log(tx.length)

    }