const express = require('./node_modules/express')
const router = express.Router()
const InventoryService = require('../../services/InventoryService')

// Recommend using a global err handler (middleware) to sanitize errs in the future

router.post('/do-something', async (req, res) => {
    // business logic
    // InventoryService.function()
})

module.exports = router