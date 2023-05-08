let nombre = "santiago";
let apellido = "matias"

const obj ={
    nombre,
    apellido
}

sessionStorage.setItem("objeto",obj)

// sessionStorage.setItem("datos", JSON.stringify(datos))
//  localStorage.setItem("datos", JSON.stringify(datos))

const now = new Date()
//  document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`