const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  model: { type: String, required: true },
  status: { type: String, required: true },
  weight: { type: String, required: true },
  weigh_class: { type: String, required: true },
  manufacturer: { type: Number, required: true },
  category: { type: Number, required: true },
  tag: { type: String, required: true },
  rel_product: { type: String, required: true },
  sort_order: { type: Number, required: true },
  min_quantity: { type: Number, required: true },
  sub_stock: { type: Number, required: true },
  stock_status: { type: Number, required: true },
  meta_title: { type: String, required: true },
  meta_description: { type: String, required: true },
  meta_keyword: { type: String, required: true }
})
const Product = mongoose.model('Product', productSchema)
module.exports = Product
