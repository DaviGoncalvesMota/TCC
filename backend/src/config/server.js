const port = 4000

const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))
server.use(allowCors)

server.listen(port, function () {
    console.log(`BACKEND está funcionando na porta ${port}.`)
})

module.exports = server