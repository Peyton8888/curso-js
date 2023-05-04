function suma(num1, num2) {
    return num1 + num2}

function multiplica(num1, num2){
    return num1 * num2}

function restar(num1 , num2) {
    return num1 - num2}

function dividir(num1, num2) {
    return num1 / num2}

function elevar(num1, num2){
    return num1 ** num2}

function factorial(factorial) {
    let facto= 1;
    for(let i =2; i<=factorial; i++){
         facto *=i
    }
    return facto
}

module.exports = {
    suma:suma,
    multiplica:multiplica,
    restar:restar,
    dividir:dividir,
    elevar:elevar,
    factorial}