// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const date = new Date();
console.log(date)
// - La fecha de tu nacimiento
const fnacimiento = new Date("2005,07,29");
console.log(fnacimiento)
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const tarde = date > fnacimiento;
console.log(tarde)
// - Una variable que contenga el día de tu nacimiento
const dia = fnacimiento.getDate()
console.log(dia)
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = fnacimiento.getMonth()+1
console.log(mes)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const año = fnacimiento.getFullYear()
console.log(año)