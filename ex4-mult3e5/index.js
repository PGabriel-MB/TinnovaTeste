const { iptd } = require('./input/input');

somaMultiplos = num => {
    let somador = 0;

    for (let i = 3; i < num; i++) {
        if(i % 3 == 0 || i % 5 == 0){
            somador += i;
        }
    }

    return somador;
}

console.log('Ex.5 - Som Multiplos 3 e 5');

iptd.question('Digite um número: ', data => {
    let soma = somaMultiplos(data)

    console.log(`A soma dos multiplos é: ${soma}`);

    iptd.close();
});
