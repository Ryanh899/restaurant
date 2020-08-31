// APP SETUP
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

// ROUTE LOGGING
const morgan = require('morgan')
app.use(morgan(':method :url :status - :date[web] - :response-time ms'))

// REQUIRE ROUTES
const routes = require('./routes/index.js');

// testing db connection
const mongoose = require('./db/db-connection')

// MIDDLEWARE
app.use(express.json())

// ROUTING
app.use(express.static('public'))
app.use(routes)

// START APP
app.listen(PORT, () => {
    console.log(`Server now listening on PORT: ${PORT}`)
})