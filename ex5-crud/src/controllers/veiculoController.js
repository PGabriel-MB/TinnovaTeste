const express = require('express');

const Veiculo = require('../models/Veiculo');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const veiculo = await Veiculo.create(req.body);

        return res.send({ veiculo });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed!', err });
    }
});

router.get('/', async (req, res) => {
    try {
        const veiculos = await Veiculo.find();

        return res.send(veiculos);
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const veiculo = await Veiculo.findById(req.params.id);

        return res.send({ veiculo });
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const retorno = await Veiculo.updateOne({ _id: req.params.id }, { ...req.body, updated: new Date() });

        return res.send({ retorno });
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!', err });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const veiculo = await Veiculo.updateOne({ _id: req.params.id }, { ...req.body, updated: new Date() });

        return res.send({ veiculo });
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!', err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const retorno = await Veiculo.deleteOne({ _id: req.params.id });

        return res.send({ retorno });
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!', err });
    }
});

module.exports = router
