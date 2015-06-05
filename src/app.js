'use strict'

import app from 'ampersand-app'
// get the css
import './styles/main.styl'
// get server.js
import 'file?name=server.js!../server.js'

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
