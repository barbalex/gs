/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import app              from 'ampersand-app'
import React            from 'react'
import Router           from 'ampersand-router'
import Layout           from './layout'
import PublicPage       from './pages/public'
import LeitbildPage     from './pages/leitbild'
import ProjektePage     from './pages/projekte'
import TechnologienPage from './pages/technologien'
import NavHelper        from './components/nav-helper'
import KontaktPage      from './pages/kontakt'
import MessagePage      from './pages/message'

export default Router.extend({
  renderPage (page) {
    page = (
      <NavHelper>
        <Layout>
          {page}
        </Layout>
      </NavHelper>
    )

    React.render(page, document.body)
  },

  routes: {
    '':             'public',
    'leitbild':     'leitbild',
    'projekte':     'projekte',
    'technologien': 'technologien',
    'kontakt':      'kontakt',
    '*fourohfour':  'fourOhFour'
  },

  public () {
    this.renderPage(<PublicPage/>)
  },

  leitbild () {
    this.renderPage(<LeitbildPage/>)
  },

  projekte () {
    this.renderPage(<ProjektePage/>)
  },

  technologien () {
    this.renderPage(<TechnologienPage/>)
  },

  kontakt () {
    this.renderPage(<KontaktPage/>)
  },

  fourOhFour () {
    this.renderPage(<MessagePage title = 'Hoppla: diese Seite gibt es nicht :-('/>)
  }
})