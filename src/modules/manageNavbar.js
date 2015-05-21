/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import $ from 'jquery'

function closeNavbarCollapse ($navbarCollapse) {
  // nur schliessen, wenn Mobilansicht aktiv
  if (window.innerWidth < 767) {
    $navbarCollapse.hide(400)
  }
}

export default function () {
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
}
