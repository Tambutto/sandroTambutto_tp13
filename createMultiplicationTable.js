// --- MICRO DESAFIO 2 ---


function createMultiplicationTable(){
    for (let numero = 1; numero <=10; numero++) {
        console.log(`Tabla de multiplicar del ${numero}: `);
        for (let i = 0; i <=10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        
    }
        console.log(''); // Espacio entre las tablas
    }
}

createMultiplicationTable();