const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

webpackConfig = merge(baseWebpackConfig, {})

if (process.env.NODE_ENV === 'production') {
  webpackConfig.devtool = '#source-map'
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}
module.exports = webpackConfig
