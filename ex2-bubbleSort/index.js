let vetor = [5, 3, 2, 4, 7, 1, 0, 6];

function swap(miniVet) {
    console.log(miniVet)
    return miniVet.sort((primeiro, segundo) => primeiro - segundo);
}

function bubbleSort(param) {
    let vetorVazio = [];

    for (let i = 0; i < param.length; i++) {
        if ((i + 2) < param.length) {
            let miniVet = swap(param.splice(i, 2));
            vetorVazio = vetorVazio.concat(miniVet);
        }
    }
    
    console.log(vetorVazio)
}

bubbleSort(vetor);