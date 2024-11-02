// --- DESAFIO EXTRA ---

function showNumbers(num){
    for (let i = 0; i <10; i++) {
        console.log(num += 1 );
    }
;}

// showNumbers(-1);

// -- EJERCICIO 2 ---

let printEveryThree = () => {
   for (let numero = 1; numero <= 57; numero += 3) {
    console.log(numero);  
}        
};

// printEveryThree();

// --- EJERCICIO 3 ---




function totalSummation(){
    let total= 0;
    for (let i = 0; i <= 100; i ++) {
       total += i; 
    }
    return total;
}

resultado = totalSummation();

console.log(`La sumatoria de todos los numeros entre el 0 y el 100 es: ${resultado}`);



// --- EJERCICIO 4 ---

function showToUpperCase(texto){
    for (let i = 0; i < texto.length; i++) {
        console.log(texto[i].toUpperCase());
        
    }
}

// showToUpperCase("practicando el uso de los ciclos o bucles");

// --- EJERCICIO 5 ---

let numerosPositivos = [12, 2, 3, 5 ,21 , 22, 45, 70, 50]

function returnPairs(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(`El número ${array[i]} es Par`);
            
        }else{
            console.log(`${array[i]} NO es un número Par`)
        }
       
    }
}

// returnPairs(numerosPositivos);

module.exports = {
    showNumbers,
    printEveryThree,
    totalSummation,
    showToUpperCase,
    returnPairs
    }
    