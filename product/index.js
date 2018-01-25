const express = require('express')
const Router = express.Router()
const Auth = require('../lib/auth')
const Container = require('../ioc.js').Search()
const es = Container.resolve('search')

Router.use((req, res, next) => {
  Auth.isAuthenticated(req, res, next)
})

Router.get('/product/add', function (req, res) {
  res.send('product add')
})

Router.get('/product/list', function (req, res) {
  const data =  es.find()
  res.send(data)
})

Router.get('/product/update', function (req, res) {
  res.send('product update')
})

Router.get('/product/delete', function (req, res) {
  res.send('product delete')
})
module.exports = Router
