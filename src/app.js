'use strict'

import app from 'ampersand-app'
// get the css
import './styles/main.styl'
// get server.js
import 'file?name=server.js!../server.js'
// get google verif and favicon file and keep its name as it is
require('file?name=google62104c6b2995c087.html!../google62104c6b2995c087.html')
require('file?name=favicon.ico!../favicon.ico')

import Router from './router.js'
import manageNavbarToggleVisibility from './modules/manageNavbarToggleVisibility'

window.app = app // expose app to the browser console

app.extend({
  init () {
    this.router = new Router()
    manageNavbarToggleVisibility()
  }
})

app.init()
