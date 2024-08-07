const express = require('express');
const fileUpload = require("express-fileupload");

module.exports = function (server) {
    //API Routes
    const router = express.Router()
    server.use('/api', router)
    server.use(fileUpload());

    //USER Routes
    const userService = require('../api/user/userService')
    userService.register(router, '/users')

    //Produto Routes
    const produtoService = require('../api/produto/produtoService')
    produtoService.register(router, '/produtos')

    server.get('/teste', (req, res) => {
        res.json({ message: 'Achados e Peridos API' });
    });

    const { buscar } = require('../api/produto/buscarService');
    server.get('/api/buscarproduto', buscar);

    const { uploadImage } = require('../api/storage/upload');
    server.post('/api/uploadimage', uploadImage);
}