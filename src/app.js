'use strict'

import app from 'ampersand-app'
// this import seems not used but is necessary for styling
import styles from './styles/main.styl'
// favicon needs to be imported to be provided by webpack
import faviconImg from 'file?name=favicon.ico!../favicon.ico'
// a 200.html page redirects to other pages
import twohundredPage from 'copy!./200.html'
// import twohundredPage from 'file?name=200.html!./200.html'

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
