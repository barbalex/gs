/*
 * manages if the navbar toggle (hamburger menu) opens or closes
 * TODO: do this the react way
 */

import $ from 'jquery'

const closeNavbarCollapse = ($navbarCollapse) => {
  // nur schliessen, wenn Mobilansicht aktiv
  if (window.innerWidth < 767) {
    $navbarCollapse.hide(400)
  }
}

export default function () {
  // bootstrap managt die navbar nicht
  // selber machen!
  $(document).on('click.nav', '.navbar-nav', function clickNavbarNav() {
    const $navbarCollapse = $(this).closest('.navbar-collapse')
    closeNavbarCollapse($navbarCollapse)
  })
  $(document).on('click.nav', '.navbar-toggle', function clickNavbarToggle() {
    const $navbarCollapse = $(this)
      .parent()
      .parent()
      .find('.navbar-collapse')

    if ($navbarCollapse.is(':visible')) {
      $navbarCollapse.hide(400)
    } else {
      $navbarCollapse.show(400)
    }
  })
  // man soll auch auf den Titel klicken können und das Menü schliesst
  $(document).on('click.nav', '.navbar-brand', function clickNavbarBrand() {
    const $navbarCollapse = $(this)
      .parent()
      .parent()
      .find('.navbar-collapse')
    closeNavbarCollapse($navbarCollapse)
  })
}
