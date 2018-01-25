const Search = require('./mem.service')
const elasticsearch = require('elasticsearch')
const awilix = require('awilix')
const { asValue, asClass } = awilix

module.exports = (container) => {
  container.register('search', asClass(Search))
  return container
}
