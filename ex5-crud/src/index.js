const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const veiculoController = require('./controllers/veiculoController');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//require('./controllers/veiculoController')(app);

app.use('/veiculos', veiculoController);

app.listen(3000, () => {
    console.log('Rodando da Porta 3000!');
});

module.exports = app
