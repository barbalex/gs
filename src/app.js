/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import app from 'ampersand-app'
// this import seems not used but is necessary for styling
import styles from './styles/main.styl'
import faviconImg from '../favicon.ico'
import Router from './router'
import manageNavbarToggleVisibility from './modules/manageNavbarToggleVisibility'
import manageProjectScrolling from './modules/manageProjectScrolling'

window.app = app // expose app to the browser console

app.extend({
  init () {
    this.router = new Router()
    this.router.history.start()
    manageNavbarToggleVisibility()
    manageProjectScrolling()
  }
})

app.init()
