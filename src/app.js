'use strict'

import app from 'ampersand-app'
// this import seems not used but is necessary for styling
import styles from './styles/main.styl' // eslint-disable-line
// favicon needs to be imported to be provided by webpack
import 'raw!../favicon.ico'
// a 200.html page redirects to other pages (named 200 because )
import 'raw!./200.html'
// get server.js
import 'raw!../server.js'

import Router from './router'
import manageNavbarToggleVisibility from './modules/manageNavbarToggleVisibility'

window.app = app // expose app to the browser console

app.extend({
  init () {
    this.router = new Router()
    manageNavbarToggleVisibility()
  }
})

app.init()
