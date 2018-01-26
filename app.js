const express = require('express')
const app = express()
const Login = require('./login')
const Product = require('./product')
const Category = require('./category')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/', Login)
app.use('/api', Product)
app.use('/api', Category)
const apiEndpoint = process.env.API_ENDPOINT || '3000'
app.listen(apiEndpoint, () => console.log(`admin api listening on port: ${apiEndpoint}`))
