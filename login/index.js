const express = require('express')
const Router = express.Router()
const Auth = require('../lib/auth')
const Container = require('../ioc.js').Search()
const {UserActions} = Container.resolve('db').getActions()
const userObj = {
  name: 'Hasan',
  username: 'hasan@gmail.com',
  password: 'hasan',
  admin: 1
}
const userInfo = {
  username: 'hasan@gmail.com',
  password: 'hasan'
}

Router.get('/login', (req, res) => {
  UserActions.findUser(userInfo).then((result) => {
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
  UserActions.addUser(userObj).then((result) => {
    res.send(result)
  })
})
module.exports = Router
