const port = 4000

//const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

//server.use(bodyParser.urlencoded({extended: true}))
//server.use(bodyParser.json())

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(allowCors)

server.listen(port, function () {
    console.log(`BACKEND está funcionando na porta ${port}.`)
})

module.exports = server