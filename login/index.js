const express = require('express')
const Router = express.Router()
const Auth = require('../lib/auth')

Router.get('/login', (req, res) => {
  var token = Auth.getAuthToken({email: 'rubeldhkbd@gmail.com'})
  res.send(token)
})

Router.get('/logout', (req, res) => {
  res.send('logOut true')
})

module.exports = Router
