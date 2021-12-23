const express = require('express');

const Vehicle = require('../models/Vehicle');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);

        return res.send({ vehicle });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed!', err });
    }
});

router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();

        return res.send(vehicles);
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);

        return res.send({ vehicle });
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!' });
    }
});

router.get('/find/q', async (req, res) => {
    try {
        const vehicles = await Vehicle.find(req.query);

        return res.send({ vehicles });
    } catch (err) {
        return res.status(400).send({ error: 'Reques failed!' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const retorno = await Vehicle.findOneAndUpdate({ _id: req.params.id }, { ...req.body, updated: new Date() }, { runValidators: true });

        return res.send({ retorno });
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!', err });
    }
});


router.patch('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findOneAndUpdate({ _id: req.params.id }, { ...req.body, updated: new Date() }, { runValidators: true });

        return res.send({ vehicle });
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!', err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const retorno = await Vehicle.deleteOne({ _id: req.params.id });

        return res.send({ retorno });
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!', err });
    }
});

module.exports = app => app.use('/vehicle', router);
