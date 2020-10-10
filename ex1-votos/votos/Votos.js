class Votos {

    constructor(totalEleitores, validos, brancos, nulos){
        this.totalEleitores = totalEleitores;
        this.validos = validos;
        this.votosBrancos = brancos;
        this.nulos = nulos;
    }

    percentVotosValidos() {
        return this.validos / this.totalEleitores;
    }

    percentVotosBrancos() {
        return this.votosBrancos / this.totalEleitores;
    }

    percentVotosNulos() {
        return this.nulos / this.totalEleitores;
    }
}

module.exports = Votos