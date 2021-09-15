const webpackDevServer = require('webpack-dev-server')
const paths = require('./paths')
const express = require('express')

module.exports = function (config, compiler, options) {
  options = {
    after: (app) => {
      app.get('/*', (req, res) => {
        res.redirect('/')
      })
    },
    ...options,
  }

  try {
    const apiApp = express()
    const stubApiRouter = require(paths.resolveApp('stubs/api'))
    apiApp.use('', stubApiRouter)
    apiApp.listen(3001)
    console.log('Mock backend listening on port 3001')
  } catch (_e) {
    console.log('Add stubs/api folder to run mock backend')
  }

  webpackDevServer.addDevServerEntrypoints(config, options)
  return new webpackDevServer(compiler, options)
}
