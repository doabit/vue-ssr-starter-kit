var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.config')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || 3000

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.use(bodyParser.json())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('*', function(req, res) {
  const title = "demo"
  res.send(`<!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <title>${title}</title>
                </head>
                <body>
                  <div id="app"></div>
                  <script src="client-bundle.js"></script>
                </body>
              </html>`
            )
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
