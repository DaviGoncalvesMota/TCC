const express = require('express')

module.exports = function(server) {
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //USER Routes
    const userService = require('../api/user/userService')
    userService.register(router, '/users')

    //Produto Routes
    const produtoService = require('../api/produto/produtoService')
    produtoService.register(router, '/produtos')
}