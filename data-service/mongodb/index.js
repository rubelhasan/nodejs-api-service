const Search = require('./db.service')
const mongoose = require('mongoose')
const awilix = require('awilix')
const { asValue, asClass } = awilix

module.exports = (container) => {
  const dbUrl = process.env.MDB_ENDPOINT || 'localhost:27017'
  mongoose.connect(dbUrl)
  container.register('db', asClass(Search))
  return container
}
