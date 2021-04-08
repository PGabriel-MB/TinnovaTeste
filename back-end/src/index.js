const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const veiculoController = require('./controllers/veiculoController');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/veiculos', veiculoController);

app.listen(3000, () => {
    console.log('Rodando da Porta 3000!');
});

module.exports = app
