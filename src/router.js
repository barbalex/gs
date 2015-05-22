/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import React from 'react'
import Router from 'ampersand-router'
import Layout from './layout'
import PublicPage from './pages/public'
import LeitbildPage from './pages/leitbild'
import ProjektePage from './pages/projekte'
import TechnologienPage from './pages/technologien'
import NavHelper from './components/nav-helper'
import KontaktPage from './pages/kontakt'
import MessagePage from './pages/message'

export default Router.extend({
  renderPage (page, pageName) {
    page = (
      <NavHelper>
        <Layout pageName={pageName}>
          {page}
        </Layout>
      </NavHelper>
    )

    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'leitbild': 'leitbild',
    'projekte': 'projekte',
    'technologien': 'technologien',
    'kontakt': 'kontakt',
    '*fourohfour': 'fourOhFour'
  },

  public () {
    this.renderPage(<PublicPage/>)
  },

  leitbild () {
    this.renderPage(<LeitbildPage/>, 'leitbild')
  },

  projekte () {
    this.renderPage(<ProjektePage/>, 'projekte')
  },

  technologien () {
    this.renderPage(<TechnologienPage/>, 'technologien')
  },

  kontakt () {
    this.renderPage(<KontaktPage/>, 'kontakt')
  },

  fourOhFour () {
    this.renderPage(<MessagePage title = 'Hoppla: diese Seite gibt es nicht :-('/>)
  }
})
