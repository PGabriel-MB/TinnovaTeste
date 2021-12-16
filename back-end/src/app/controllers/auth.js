const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth.json');

const User = require('../models/User');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists!' });
        
        const user = await User.create(req.body);

        console.log('TESTE', user)

        user.password = undefined

        return res.send({
            user,
            token: generateToken({ id: user.id })
        });
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "Registration failed..." });
    }
});

module.exports = app => app.use('/auth', router);
