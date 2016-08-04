'use strict'

process.env.VUE_ENV = 'server'

const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const serialize = require('serialize-javascript')
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

const renderer = createBundleRenderer(fs.readFileSync('./dist/server-bundle.js', 'utf-8'), {
  cache: require('lru-cache')({ max: 10000 })
})

const stats = []

const app = express()

app.use(express.static(path.resolve(__dirname, 'dist')))
app.use(favicon(path.resolve(__dirname, 'dist/logo.png')))

app.get('*', (req, res) => {
  const start = Date.now()
  const context = { url: req.url }
  const renderStream = renderer.renderToStream(context)

  res.write('<!DOCTYPE html><body>')

  renderStream.on('data', chunk => {
    res.write(chunk)
  })

  renderStream.on('end', () => {
    res.end(`<script src="client-bundle.js"></script></body>`)
    const used = Date.now() - start
    stats.push(used)
    console.log(`request used: ${(Date.now() - start)}ms`)
    console.log(`average: ${(stats.reduce((s, t) => s + t, 0) / stats.length).toFixed(2)}ms`)
  })

  renderStream.on('error', err => {
    throw err
  })
})

app.listen(3000, () => {
  console.log('ready at localhost:3000')
})