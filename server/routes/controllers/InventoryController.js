const express = require('express')
const router = express.Router()
const InventoryService = require('../../services/InventoryService')

// Recommend using a global err handler (middleware) to sanitize errs in the future

router.post('/additem', async (req, res) => {
    // business logic
    let inventoryItem = req.body.inventoryItem 

    //call service
    try {
        const savedItem = await InventoryService.insertIntoInventory( inventoryItem )
        res.status(201).json( savedItem )
    } catch(error) {
        res.status(400).json({ error })
    }
})

router.get('/getbycategory/:category', async (req, res) => {
    let category = req.params.category

    try {
        const data = await InventoryService.getInventoryByCategory( category )

        res.status(201).json( data )
    } catch (err) {
        console.log(err)
        res.status(400).json({ err })
    }
})



module.exports = router