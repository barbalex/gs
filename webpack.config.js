'use strict'

require('babel/register')    // converts required jsx to html
var getConfig = require('hjs-webpack')
/*var React = require('react')
var fourOhFour = require('./src/pages/fourOhFour')
var Public = require('./src/pages/public')*/
var config

config = getConfig({
  in: 'src/app.js',
  out: 'public',
  isDev: process.env.NODE_ENV !== 'production' /*,
  html: function (context) {
    // prerender on Server
    // because otherwise on first load it gets rendered after app.js was downloaded
    // uncommented because of messages in console
    var fourOhFourHtml = React.renderToString(React.createElement(fourOhFour))
    var publicHtml = React.renderToString(React.createElement(Public))

    return {
      '200.html': context.defaultTemplate({html: fourOhFourHtml}),
      'index.html': context.defaultTemplate({html: publicHtml})
    }
  }*/
// here you can configure you local machine hostname
// and share it with other devices on your network
// hostname: 'local_machine_hostname.local'
})

// add loader for png files
config.module.loaders.push(
  {
    test: /\.(jpe?g|png|gif|svg|ico)$/i,
    loader: 'file'
  }
)

module.exports = config
