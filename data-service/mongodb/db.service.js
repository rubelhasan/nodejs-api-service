const User = require('./actions/user')
const Product = require('./actions/product')
const Category = require('./actions/category')

class db {
  constructor () {
    // need to make singleton
    this._ProductActions = new Product()
    this._UserActions = new User()
    this._CategoryActions = new Category()
  }
  getActions () {
    const ProductActions = this._ProductActions
    const UserActions = this._UserActions
    const CategoryActions = this._CategoryActions
    return {UserActions, ProductActions, CategoryActions }
  }
}
module.exports = db
