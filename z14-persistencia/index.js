// localStorage.setItem("nombre", "matias")

console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona",JSON.stringify({
//     nombre:"santiago", edad:13
// }))

console.log(JSON.parse(localStorage.getItem("persona")))

//json.stringify -> conviete un objeto/array en string

//json.parse -> convierte un objeto /array conviertido a traves de stringify en un objeto de javascript

//removiendo el dato nobre

localStorage.removeItem("nombre")

//secion estore solo permanece en la ventana
// sessionStorage.set("nombre", "santiago")

//Cookies
document.cookie ="nombrecok=santiagoCookie"

document.cookie ="nombrecaducidad=nombrecok;expires=" +new Date(2023,0,1).toUTCString()

console.log(document.cookie)