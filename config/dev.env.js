'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WS_API:'"ws://47.93.14.128:13080"',
  API_HOST:'"http://47.93.14.128"'

})
