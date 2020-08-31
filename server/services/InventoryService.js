// const pool = require('../db/db-connection')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const InventoryModel = require('../db/models/InventoryModels'); 

class InventoryService {
    static async getKegInventory() {
        // data base query
    }

    static async insertIntoInventory() {
        console.log('insertIntoInventory')
        InventoryModel.create({ 
            name: 'Boat Shoes',
            inventory: 5, 
            category: 'Beer', 
            high_par: 5, 
            low_par: 3, 
            high_order_day: 5, 
            low_order_day: 1, 
            vendor: 'Karl Strauss', 
         }, function (err, small) {
            if (err) return console.log(err) 
            console.log(small)
            console.log('saved')
            // saved!
          });
    }

}

module.exports = InventoryService