const express = require('express')
const Router = express.Router()
const Auth = require('../lib/auth')
const Container = require('../ioc.js').Search()
const dataModel = Container.resolve('search')
const userObj = {
  name: 'Hasan',
  username: 'hasann@gmail.com',
  password: 'hasan',
  admin: 1
}
const userInfo = {
  username: 'hasann@gmail.coms',
  password: 'hasan'
}

Router.get('/login', (req, res) => {
  dataModel.findUser(userInfo).then((result) => {
    if (result) {
      var token = Auth.getAuthToken(userInfo.username)
      res.send(token)
    } else {
      res.send('password not match')
    }
  })
})

Router.get('/logout', (req, res) => {
  res.send('logOut true')
})

Router.get('/registration', (req, res) => {
  dataModel.addUser(userObj).then((result) => {
    res.send(result)
  })
})
module.exports = Router
