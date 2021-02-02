const configCreator = require('./configCreator')

module.exports.config = configCreator({
  capabilities: { browserName: 'chrome' }
})
