/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import $ from 'jquery'

export default function () {
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
