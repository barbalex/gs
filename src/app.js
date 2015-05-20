/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import app from 'ampersand-app'
// this import seems not used but is necessary for styling
import styles from './styles/main.styl'
import Router from './router'

window.app = app // expose app to the browser console

app.extend({
  init () {
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
