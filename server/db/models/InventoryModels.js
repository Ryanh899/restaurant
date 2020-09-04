const mongoose = require('mongoose');
const Schema = mongoose.Schema({
  name: String,
  inventory: Number,
  category: String,
  high_par: Number,
  low_par: Number,
  high_order_day: Number,
  low_order_day: Number,
  vendor: String
})
// general post schema 
const InventoryModel = mongoose.model("inventory", Schema);

module.exports = InventoryModel