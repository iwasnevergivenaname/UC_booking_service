require('dotenv').config()
const express = require("express")
const cors = require("cors")

const app = express()

const routingRoutes = require('./routes/routing')

app.use(cors())
app.use(express.json())
app.use('/routing', routingRoutes)

module.exports = app