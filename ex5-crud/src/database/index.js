const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });
const password = 'veiculo';
const user = 'veiculo';
const dbname = 'veiculo';
mongoose.connect(`mongodb+srv://veiculo:${password}@cluster0.pgpdg.mongodb.net/${dbname}?retryWrites=true&w=majority`, { useFindAndModify: false });

mongoose.Promise = global.Promise;

module.exports = mongoose;
