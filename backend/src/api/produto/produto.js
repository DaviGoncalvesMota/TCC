const restful = require('node-restful')
const mongoose = restful.mongoose

const produtoSchema = new mongoose.Schema({
    nome: {type: String, required: true}, 
    local: {type: String, required: true},
    categoria: {type: String, required: false},
    descricao: {type: String, required: false}, 
    imagem: {data: Buffer, ContentType: String },
})

module.exports = restful.model('Produto', produtoSchema)