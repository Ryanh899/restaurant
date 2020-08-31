const jwt = require('express-jwt')
const express = require('express')
const router = express.Router()

// REQUIRE ROUTES
const InventoryController = require('./controllers/InventoryController')


router.use('/inventory', InventoryController)
// router.use('/api', jwt({ secret: process.env.JWT_SECRET }), TaskController)

module.exports = router