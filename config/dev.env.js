'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WS_API:'"ws://47.93.194.146:13080"',
  HOST_API:'"http://47.93.194.146"'
})
