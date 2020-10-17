const app = require('../index');
const supertest = require('supertest');
const chai = require('chai');
const Veiculo = require('../models/Veiculo');

const request = supertest;
const expect = chai.expect;

describe('veiculoController', () => {
    let veiculo = {
        "veiculo": "Celta",
        "marca": "Chevrolet",
        "ano": 2010,
        "descricao": "Um carro legal que eu pretendo ter futuramente.",
        "vendido": false
    }

    before(async () => {
        await Veiculo.deleteMany();
    })

    describe('criaVeiculo', () => {
        it('200', (done) => {
            request(app).post('/veiculos')
            .send(veiculo)
            .expect(200)
            .end(done);
        })

        it('400', (done) => {
            request(app).post('/veiculos')
            .send({})
            .expect(400)
            .end(done);
        })
    });
});
