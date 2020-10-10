const Votos = require('./votos/Votos')

console.log('Teste Inicial! - Ex1 - VOTOS');

let app = new Votos(1000, 800, 150, 50);

let votacao = {
    percValidos: app.percentVotosValidos() * 100,
    percBrancos: app.percentVotosBrancos() * 100,
    percentNulos: app.percentVotosNulos() * 100
}

console.log(`Percentual de Votos VÁLIDOS: ${votacao.percValidos} %`);
console.log(`Percentual de Votos EM BRANCO: ${votacao.percBrancos} %`);
console.log(`Percentual de Votos NULOS: ${votacao.percentNulos} %`);

process.exit();
