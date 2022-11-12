require('dotenv').config()
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const portExpress = process.env.PORT_EXPRESS || 3008;

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require('./communications/routes'))

app.listen(portExpress,() => {
    console.log(`🚀 Servidor está rodando na porta ${portExpress}`)
})