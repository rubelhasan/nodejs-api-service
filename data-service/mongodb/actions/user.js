const UserModel = require('../model/user')

class User {
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
}
module.exports = User