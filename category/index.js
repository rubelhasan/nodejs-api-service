const express = require('express')
const Router = express.Router()
const Auth = require('../lib/auth')
const Container = require('../ioc.js').Search()
const {CategoryActions} = Container.resolve('db').getActions()
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
  CategoryActions.addCategory(req.body).then((result) => {
    res.send(result)
  })
})

Router.get('/category/list', function (req, res) {
  CategoryActions.getCategory().then((result) => {
    res.send(result)
  })
})

Router.get('/category/update', function (req, res) {
  const data = CategoryActions.updateContent()
  res.send(data)
})

Router.get('/category/delete/:id', function (req, res) {
  CategoryActions.deleteCategory(req.params.id).then((result) => {
    res.send(result)
  })
})
module.exports = Router
