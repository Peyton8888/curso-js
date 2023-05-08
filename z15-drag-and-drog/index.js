// const parrafos = document.querySelectorAll(".parrafo");
// const secciones = document.querySelectorAll(".section")

// parrafos.forEach(parrafo =>{
//     parrafo.addEventListener("dragstart", event =>{
//         console.log("estoy arrastrando el parrafo: "+ parrafo.innerHTML)
//         parrafo.classList.add("dragging")
//         event.dataTransfer.setData("id", parrafo.id)
//         // const element_f = document.querySelectorAll(".f")
//         // event.dataTransfer.setDragImage(element_f,0,0)
//     })

//     parrafo.addEventListener("dragend", ()=>{
//         parrafo.classList.remove("dragging")
//     })
// })

// secciones.forEach(seccion =>{
//     seccion.addEventListener("dragover", event =>{
//         event.preventDefault()
//         event.dataTransfer.dropEffect ="copy"
//     })

//     seccion.addEventListener("drop", event =>{
//         const id_parrafo = event.dataTransfer.getData("id")
//         const parrafo=  document.getElementById(id_parrafo)
//         seccion.appendChild(parrafo)
//     })
// })

const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".section")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" // copy por defecto
        // console.log("Drag Over")
        //
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})