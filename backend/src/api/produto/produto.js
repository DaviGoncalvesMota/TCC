const restful = require('node-restful')
const mongoose = restful.mongoose

const produtoSchema = new mongoose.Schema({
    nome: {type: String, required: true}, //usar em todos
    telefone: {type: String, required: true}, //usar em todos
    OndeAchado: {type: String, required: true}, //usar somente nos achados
    OndePerdido: {type: String, required: false}, //usar somente nos perdidos
    Relevancia: {type: String, required: false}, //usar em todos
    
})

module.exports = restful.model('Produto', produtoSchema)