var env
var details = require('../package.json')

if (process.browser) {
  env = 'browser'
} else {
  env = 'node'
}

env = process.browser ? 'browser' : 'node'

env = process.browser && 'browser'

env = process.browser || 'server'
