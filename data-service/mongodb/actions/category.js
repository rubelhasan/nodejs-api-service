const CategoryModel = require('../model/category')

class Category {
  addCategory (item) {
    return new Promise((resolve, reject) => {
      const category = new CategoryModel(item)
      category.save((err, res) => {
        if (err) {
          resolve('error')
        }
        resolve(res)
      })
    })
  }

  getCategory () {
    return new Promise((resolve, reject) => {
      CategoryModel.find({}, (err, res) => {
        if (err) {
          resolve('error')
        }
        resolve(res)
      })
    })
  }

  deleteCategory (id) {
    return new Promise((resolve, reject) => {
      CategoryModel.remove({_id: id}, (err) => {
        if (err) {
          resolve('error')
        }
        resolve('done')
      })
    })
  }
}
module.exports = Category