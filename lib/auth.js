const jwt = require('jsonwebtoken')
const tokenKey = process.env.TOKEN_KEY
const resMsg = require('../msg')
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1YmVsZGhrYmRAZ21haWwuY29tIiwiaWF0IjoxNTE2ODYyODc5fQ.yvnBZKXzfEEZkJoiRU_-oSSHjxfUNGEEH-XhFYl-ljw'
class Auth {
  isAuthenticated (req, res, next) {
    if (req.path === '/login') {
      next()
    } else {
      this.isValidAuth(token).then((result) => {
        if (result.statusCode === 200) {
          next()
        } else {
          res.send(result)
        }
      })
    }
  }

  getAuthToken (userName) {
    const token = jwt.sign(userName, tokenKey)
    return token
  }
  isValidAuth (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, tokenKey, (err, decoded) => {
        if (err) {
          resolve(resMsg.notLogin)
        } else {
          resolve(resMsg.login)
        }
      })
    })
  }
}
module.exports = new Auth()
