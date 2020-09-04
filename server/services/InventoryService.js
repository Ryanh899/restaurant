// const pool = require('../db/db-connection')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const InventoryModel = require('../db/models/InventoryModels'); 

class InventoryService {
    static async getKegInventory() {
        // data base query
    }

    static async insertIntoInventory(inventoryItem) {
        console.log('insertIntoInventory')
        InventoryModel.create({ inventoryItem }, function (err, small) {
            if (err) return console.log(err) 
            console.log('saved: ', small)
            // saved!
          });
    }

    static async getAllInventory() {
        InventoryModel.find(function (err, data) {
            if (err) return console.log(err)
            console.log(data)
        })
    }

    static async getInventoryByCategory(category) {
        const inventory = InventoryModel.find({ category }, (err, data) => {
            if (err) return console.log(err)
            console.log(data)
            return data
        })
        return inventory
    }

}

module.exports = InventoryService