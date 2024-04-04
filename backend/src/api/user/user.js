const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: false},
    senha: {type: String, required: false},
    criadoEm: {type: Date, default: Date.now},
    
})

module.exports = restful.model('User', userSchema)