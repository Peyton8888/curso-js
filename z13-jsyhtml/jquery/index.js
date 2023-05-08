//$(selector).accion()
//hide() oculta las cosas
// $("li").hide();


//$(document).ready(() =>{

//es lo  mismo que lo de abajo

$(() =>{
    // $("li-1").hide()
    $(".hide-btn").click(()=>{
        // $("h2").hide();
        $("h2").fadeOut(); //desaparece con efecto

    })
    $(".show-btn").click(()=>{
        // $("h2").show();
        $("h2").fadeIn(); //aparece con efecto

    })

    $("li").dblclick(()=>{
        $("h2").css({color:"red"})
    })

    $(".agg_e").click(()=>{
        // $("ul").append("<li>elemento</li>")//agrega elemento al final
        $("ul").prepend("<li>nuevo elemento</li>")//al principio
    })

    $("li").mouseenter((elem)=>{ //mauseemter es como un hover
        elem.target.style.color="blue"
    })

    $("li").mouseleave((elem)=>{ //mauseemter es como un hover
        elem.target.style.color="black"
    })



})
//con show muestra el elemento
// $(()=>{
    
// })

