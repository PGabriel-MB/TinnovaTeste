const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });
const password = 'veiculo';
const user = 'veiculo';
const dbname = 'veiculo';

const uri = `mongodb+srv://${user}:${password}@cluster0.pgpdg.mongodb.net/${dbname}?retryWrites=true&w=majority`;

try {
    mongoose.connect (
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        err => console.log('Database connected!', err)
    )
} catch (error) {
    console.log('Connection Error', error)
}

module.exports = mongoose;
