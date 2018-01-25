const express = require('express')
const app = express()
const Login = require('./login')
const Product = require('./product')
app.use('/', Login)
app.use('/api', Product)
const apiEndpoint = process.env.API_ENDPOINT || '3000'
app.listen(apiEndpoint, () => console.log(`admin api listening on port: ${apiEndpoint}`))
