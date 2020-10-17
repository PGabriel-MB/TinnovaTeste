const mongoose = require('../database/index');

const VeiculoSchema = new mongoose.Schema({
    veiculo: {
        type: String,
        require: true
    },
    marca: {
        type: String,
        required: true,
        enum: ['Chevrolet', 'Ford']
    },
    ano: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    vendido: {
        type: Boolean,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated: {
        type: Date,
        required: false,
        default: Date.now
    }
});

const Veiculo = mongoose.model('Veiculo', VeiculoSchema);

module.exports = Veiculo;
