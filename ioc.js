'use strict'
const awilix = require('awilix')
module.exports.Search = () => {
  const container = awilix.createContainer()
  const dataSource = process.env.DATA_SOURCE
  require(`./data-service/${dataSource}`)(container)

  return container
}
