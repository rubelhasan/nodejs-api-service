const ProductModel = require('./model/product')

class db {
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
    return 'Get Content'
  }
  updateContent () {
    return 'Update Content '
  }
  deleteContent () {
    return 'Delete Content'
  }
  _self () {

  }
}
module.exports = db
