const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
})
const Product = mongoose.model('Product', productSchema)
module.exports = Product
