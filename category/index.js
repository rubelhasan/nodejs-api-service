const express = require('express')
const Router = express.Router()
const Auth = require('../lib/auth')
const Container = require('../ioc.js').Search()
const dataModel = Container.resolve('search')
const item = {
  name: 'Simsong Mobile',
  description: 'Awesome new 70G 21',
  quantity: 99,
  price: 1000
}
Router.use((req, res, next) => {
  Auth.isAuthenticated(req, res, next)
})

Router.post('/category/add', function (req, res) {
  dataModel.addCategory(req.body).then((result) => {
    res.send(result)
  })
})

Router.get('/category/list', function (req, res) {
  dataModel.getCategory().then((result) => {
    res.send(result)
  })
})

Router.get('/category/update', function (req, res) {
  const data = dataModel.updateContent()
  res.send(data)
})

Router.get('/category/delete/:id', function (req, res) {
  dataModel.deleteCategory(req.params.id).then((result) => {
    res.send(result)
  })
})
module.exports = Router
