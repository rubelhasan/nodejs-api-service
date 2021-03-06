const express = require('express')
const Router = express.Router()
const Auth = require('../lib/auth')
const Container = require('../ioc.js').Search()
const {ProductActions} = Container.resolve('db').getActions()
const item = {
  name: 'Simsong Mobile',
  description: 'Awesome new 70G 21',
  quantity: 99,
  price: 1000
}
Router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  Auth.isAuthenticated(req, res, next)
})

Router.post('/product/add', function (req, res) {
  ProductActions.addContent(req.body).then((result) => {
    res.send(result)
  })
})

Router.get('/product/list', function (req, res) {
  ProductActions.getContent().then((result) => {
    res.send(result)
  })
})

Router.get('/product/update', function (req, res) {
  const data = ProductActions.updateContent()
  res.send(data)
})

Router.get('/product/delete/:id', function (req, res) {
  ProductActions.deleteContent(req.params.id).then((result) => {
    res.send(result)
  })
})
module.exports = Router
