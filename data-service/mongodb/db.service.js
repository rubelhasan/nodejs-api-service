const ProductModel = require('./model/product')
const CategoryModel = require('./model/category')
const UserModel = require('./model/user')

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
  addUser (userObject) {
    return new Promise((resolve, reject) => {
      const user = new UserModel(userObject)
      user.save((err, res) => {
        if (err) {
          resolve('error')
        }
        resolve(res)
      })
    })
  }
  findUser (userInfo) {
    return new Promise((resolve, reject) => {
      UserModel.findOne({ username: userInfo.username }, function (err, user) {
        if (err) throw err
        if (user) {
          user.comparePassword(userInfo.password, function (err, isMatch) {
            if (err) throw err
            resolve(isMatch)
          })
        } else {
          resolve(false)
        }
      })
    })
  }

  _self () {

  }
}
module.exports = db
