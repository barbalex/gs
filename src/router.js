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
import KontaktPage      from './pages/kontakt'

export default Router.extend({
    renderPage (page) {
        page = (
            <Layout>
                {page}
            </Layout>
        )

        React.render(page, document.body)
    },

    routes: {
        '':             'public',
        'leitbild':     'leitbild',
        'projekte':     'projekte',
        'technologien': 'technologien',
        'kontakt':      'kontakt'
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
    }
})