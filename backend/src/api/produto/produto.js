const restful = require('node-restful')
const mongoose = restful.mongoose

const produtoSchema = new mongoose.Schema({
    nome: {type: String, required: true}, 
    local: {type: String, required: true},
    categoria: {type: String, required: true},
    descricao: {type: String, required: false}, 
    imagem: {type: String, required: false}
})

module.exports = restful.model('Produto', produtoSchema)