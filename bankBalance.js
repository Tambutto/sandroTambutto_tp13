
// ---- MICRO DESAFIO 1 ---


let  prompt  = require ('prompt-sync')() ; 

let operacioneBancarias = [];

for (let i = 0; i < 5; i++) {
    let valores = parseInt(prompt(`Por favor, ingrese depositos con valores positivos y retiros con valores negativos: `));
    
    if (valores > 0) {
        operacioneBancarias.push(valores);
    } else if (valores < 0) {
        operacioneBancarias.push(valores);
    } else {
        console.log("El valor ingresado es cero. Ingrese valor nuevamente")
}

}


let saldoTotalDepositos = 0;
let saldoActualRetiros = 0;


function calculateBalances(nombre, apellido, operacioneBancarias){

    for (let i = 0; i < operacioneBancarias.length; i++) {
        if (operacioneBancarias[i] > 0) {
            saldoTotalDepositos += operacioneBancarias[i]
        } else if (operacioneBancarias[i] < 0) {
            saldoActualRetiros -= operacioneBancarias[i];
        }else {
            console.log("El valor ingresado no es correcto");
        }
    }
    
    let saldoActual = saldoTotalDepositos - saldoActualRetiros;
    
    return `Estimada/o ${nombre} ${apellido}: El monto total de los depósitos es de: ${saldoTotalDepositos}. El monto total de retiros es de: ${saldoActualRetiros}. Por lo tanto, su saldo actual en la cuenta es de: ${saldoActual}`;
}


// console.log(calculateBalances("sandro","tambutto",operacioneBancarias));
// console.log(calculateBalances("Pedro","Perez",operacioneBancarias));
console.log("Gloria", "Medina",operacioneBancarias);

module.exports = bankBalance;