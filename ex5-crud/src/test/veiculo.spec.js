const app = require('../index');
const request = require('supertest');
const chai = require('chai');
const Veiculo = require('../models/Veiculo');

const expect = chai.expect;

describe('veiculoController', () => {
    let veiculo = {
        "veiculo": "Celta",
        "marca": "Chevrolet",
        "ano": 2010,
        "descricao": "Um carro legal que eu pretendo ter futuramente.",
        "vendido": false
    }

    let retorno = null;
    before(async () => {
        await Veiculo.deleteMany();
        retorno = await Veiculo.create(veiculo);
    });

    describe('CRUD - Veículo', () => {
        it('CadastroTest', (done) => {
            request(app).post('/veiculos')
                .send(veiculo)
                .expect(200)
                .end(done);
        })

        it('ErroCadastroTest', (done) => {
            request(app).post('/veiculos')
                .send({})
                .expect(400)
                .end(done);
        })

        it('VisualizarTodosVeiculosTest', (done) => {
            request(app).get('/veiculos')
                .expect(200)
                .end(done);
        })

        it('VisualizarVeiculoTest', (done) => {
            request(app).get(`/veiculos/${retorno._id}`)
                .expect(200)
                .expect(res => {
                    expect(res.body.veiculo._id).to.be.equal(String(retorno._id))
                })
                .end(done);
        })
        
        it('VisualizarVeiculoErroTest', (done) => {
            request(app).get(`/veiculos/${42}`)
                .expect(400)
                .end(done);
        })

        it('EditarVeiculoTest', (done) => {
            request(app).put(`/veiculos/${retorno._id}`)
                .send({
                    veiculo: 'Corsa',
                    marca: 'Chevrolet',
                    ano: '2020',
                    descricao: 'Um carro que talvez eu pretenda comprar',
                    vendido: true
                })
                .expect(200)
                .end(done);
        })

        it('EditarVeiculoErroIDTest', (done) => {
            request(app).put(`/veiculos/${42}`)
                .send({
                    veiculo: 'Corsa',
                    marca: 'Chevrolet',
                    ano: '2020',
                    descricao: 'Um carro que talvez eu pretenda comprar',
                    vendido: true
                })
                .expect(400)
                .end(done);
        })

        // it('EditarVeiculoErroMarcaTest', (done) => {
        //     request(app).put(`/veiculos/${retorno._id}`)
        //         .send({
        //             veiculo: 'Corsa',
        //             marca: 'Toyota',
        //             ano: '2020',
        //             descricao: 'Um carro que talvez eu pretenda comprar',
        //             vendido: true
        //         })
        //         .expect(500)
        //         .end(done);
        // })

        it('PATCHVeiculoAnoTest', (done) => {
            request(app).patch(`/veiculos/${retorno._id}`)
                .send({ ano: 2015 })
                .expect(200)
                .end(done);
        })

        it('PATCHVeiculoDescricaoTest', (done) => {
            request(app).patch(`/veiculos/${retorno._id}`)
                .send({ descricao: 'Quem criou o Corsa foi a Opel' })
                .expect(200)
                .end(done);
        })

        it('DeletarVeiculoTest', (done) => {
            request(app).delete(`/veiculos/${retorno._id}`)
                .expect(200)
                .end(done);
        })

        it('DeletarVeiculoErroIDTest', (done) => {
            request(app).delete(`/veiculos/${42}`)
                .expect(400)
                .end(done);
        })

    });

});
