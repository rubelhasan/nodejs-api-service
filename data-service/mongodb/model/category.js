const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: { type: String, required: true },
  parent: { type: Number, required: true },
  description: { type: String, required: true },
  meta_title: { type: String, required: true },
  meta_description: { type: String, required: true },
  meta_keyword: { type: String, required: true },
  sort_order: { type: Number, required: true }
})
const Category = mongoose.model('Category', categorySchema)
module.exports = Category
