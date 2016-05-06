'use strict'

const getConfig = require('hjs-webpack')

let config = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: '*',
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

// add a loader for ico files
config.module.loaders.push(
  {
    test: /\.(ico)$/i,
    loader: 'file'
  },
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel'
  }
)

module.exports = config
