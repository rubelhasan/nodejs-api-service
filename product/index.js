const express = require('express')
const Router = express.Router()
const Auth = require('../lib/auth')

Router.use((req, res, next) => {
  Auth.isAuthenticated(req, res, next)
})

Router.get('/product/add', function (req, res) {
  res.send('product add')
})

Router.get('/product/list', function (req, res) {
  res.send('product list')
})

Router.get('/product/update', function (req, res) {
  res.send('product update')
})

Router.get('/product/delete', function (req, res) {
  res.send('product delete')
})
module.exports = Router
