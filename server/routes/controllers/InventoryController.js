const express = require('express')
const router = express.Router()
const InventoryService = require('../../services/InventoryService')

// Recommend using a global err handler (middleware) to sanitize errs in the future

router.post('/do-something', async (req, res) => {
    // business logic
    // InventoryService.function()
    console.log('do-something')
    InventoryService.getAllInventory(); 
    res.send('success')
})

module.exports = router