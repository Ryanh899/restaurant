// APP SETUP
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000
const cors = require('cors')

// const whitelist = ['https://hairauthoritydirectory.s3.amazonaws.com', 'https://hairauthoritydirectory.com', 'https://subscriptions.zoho.com', 'https://accounts.zoho.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// ROUTE LOGGING
const morgan = require('morgan')
app.use(morgan(':method :url :status - :date[web] - :response-time ms'))

// REQUIRE ROUTES
const routes = require('./routes/index.js');

// testing db connection
const mongoose = require('./db/db-connection')

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// ROUTING
app.use(express.static('public'))
app.use(routes)

// START APP
app.listen(PORT, () => {
    console.log(`Server now listening on PORT: ${PORT}`)
})