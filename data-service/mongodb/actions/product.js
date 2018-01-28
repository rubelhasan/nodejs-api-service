const ProductModel = require('../model/product')

class Product {
  addContent (item) {
    return new Promise((resolve, reject) => {
      const product = new ProductModel(item)
      product.save((err, res) => {
        if (err) {
          resolve('error')
        }
        resolve(res)
      })
    })
  }
  getContent () {
    return new Promise((resolve, reject) => {
      ProductModel.find({}, (err, res) => {
        if (err) {
          resolve('error')
        }
        resolve(res)
      })
    })
  }
  updateContent () {
    return 'Update Content '
  }

  deleteContent (id) {
    return new Promise((resolve, reject) => {
      ProductModel.remove({_id: id}, (err) => {
        if (err) {
          resolve('error')
        }
        resolve('done')
      })
    })
  }
}

module.exports = Product
