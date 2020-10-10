const { iptd } = require('./input/input');

function calcFatorial(num) {
    if (num === 0 || num === 1){
        return 1;
    }
    
    let acumulador = 1
    for (i = num; i > 1; i--){
        acumulador = acumulador * i;
    }

    return acumulador
}

console.log('Ex.3 - Fatorial');

iptd.question('Digite um número ', num => {
    fat = calcFatorial(num);
    console.log(`Fatorial ${fat}`);
    iptd.close();
});

