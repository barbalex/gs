/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import app from 'ampersand-app'
import $ from 'jquery'
// this import seems not used but is necessary for styling
import styles from './styles/main.styl'
import Router from './router'

window.app = app // expose app to the browser console

function closeNavbarCollapse ($navbarCollapse) {
  // nur schliessen, wenn Mobilansicht aktiv
  if (window.innerWidth < 767) {
    $navbarCollapse.hide(400)
  }
}

app.extend({
  init () {
    this.router = new Router()
    this.router.history.start()
    // bootstrap managt die navbar nicht
    // selber machen!
    $(document).on('click.nav', '.navbar-nav', function () {
      const $navbarCollapse = $(this).closest('.navbar-collapse')
      closeNavbarCollapse($navbarCollapse)
    })
    $(document).on('click.nav', '.navbar-toggle', function () {
      const $navbarCollapse = $(this).parent().parent().find('.navbar-collapse')
      $navbarCollapse.show(400)
    })
    // man soll auch auf den Titel klicken können und das Menü schliesst
    $(document).on('click.nav', '.navbar-brand', function () {
      const $navbarCollapse = $(this).parent().parent().find('.navbar-collapse')
      closeNavbarCollapse($navbarCollapse)
    })

    // animiert scrollen, wenn in Projekte ein Seitenmenu gewählt wird
    $(".projekte nav ul li a[href^='#']").on('click', function (e) {
      // prevent default anchor click behavior
      e.preventDefault()
      // store hash
      var hash = this.hash
      // animate
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 300, function () {
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash
      })
    })
  }
})

app.init()
