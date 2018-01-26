const express = require('express')
const Router = express.Router()
const Auth = require('../lib/auth')
const Container = require('../ioc.js').Search()
const dataModel = Container.resolve('search')

Router.use((req, res, next) => {
  Auth.isAuthenticated(req, res, next)
})

Router.get('/product/add', function (req, res) {
  const data = dataModel.addContent()

  res.send('product add')
})

Router.get('/product/list', function (req, res) {
  const data = dataModel.getContent()
  res.send(data)
})

Router.get('/product/update', function (req, res) {
  const data = dataModel.updateContent()
  res.send(data)
})

Router.get('/product/delete', function (req, res) {
  const data = dataModel.deleteContent()
  res.send(data)
})
module.exports = Router
