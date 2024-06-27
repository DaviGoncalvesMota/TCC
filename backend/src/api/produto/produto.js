const restful = require('node-restful')
const mongoose = restful.mongoose

const produtoSchema = new mongoose.Schema({
    nome: {type: String, required: true}, 
    telefone: {type: String, required: true},
    local: {type: String, required: true},
    ondeEncontrar: {type: String, required: true},
    descricao: {type: String, required: false}, 
    userName: {type: String, required: false},
    userId: {type: String, required: false},
    imagem: {data: Buffer, ContentType: String },
})

module.exports = restful.model('Produto', produtoSchema)