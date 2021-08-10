const express = require("express")
const app = express()
const routingRoutes = require('./routes/routing')

app.use(express.json())
app.use('/routing', routingRoutes)

module.exports = app