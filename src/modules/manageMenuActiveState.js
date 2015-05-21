/*
 * manages the active status of menu navs
 * TODO: do this the react way
 */

 /*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import $ from 'jquery'

export default function (pageName) {
  $('.header').find('.js-menu').each(function () {
    const $element = $(this)
    const activeElementClassName = pageName + '_menu'

    if ($element.hasClass(activeElementClassName)) {
      // this element should be active
      $element.addClass('active')
    } else if ($element.hasClass('active')) {
      // this element is active but should not be
      $element.removeClass('active')
    }
  })
}
