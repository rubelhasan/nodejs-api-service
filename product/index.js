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

Router.get('/product/add', function (req, res) {
  dataModel.addContent(item).then((result)=>{
    res.send(result)
  })
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
