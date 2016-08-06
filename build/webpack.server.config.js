const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

webpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: {
    app: './src/server-entry.js'
  },
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process': {
        env: {
          NODE_ENV: '"production"',
          VUE_ENV: '"server"'
        }
      }
    })
  ]
})

module.exports = webpackConfig
