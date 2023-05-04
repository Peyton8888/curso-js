export function suma(num1, num2) {
    return num1 + num2}

export function multiplica(num1, num2){
    return num1 * num2}

export function restar(num1 , num2) {
    return num1 - num2}

export function dividir(num1, num2) {
    return num1 / num2}

export function elevar(num1, num2){
    return num1 ** num2}

export function factorial(factorial) {
    let facto= 1;
    for(let i =2; i<=factorial; i++){
         facto *=i
    }
    return facto
}


//se puede exportar nombre
export const nombre= "santiago";