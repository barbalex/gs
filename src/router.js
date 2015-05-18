/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import React            from 'react'
import Router           from 'ampersand-router'
import PublicPage       from './pages/public'
import LeitbildPage     from './pages/leitbild'
import ProjektePage     from './pages/projekte'
import TechnologienPage from './pages/technologien'
import KontaktPage      from './pages/kontakt'

export default Router.extend({
    routes: {
        '':             'public',
        'leitbild':     'leitbild',
        'projekte':     'projekte',
        'technologien': 'technologien',
        'kontakt':      'kontakt'
    },

    public () {
        React.render(<PublicPage/>, document.body)
    },

    leitbild () {
        React.render(<LeitbildPage/>, document.body)
    },

    projekte () {
        React.render(<ProjektePage/>, document.body)
    },

    technologien () {
        React.render(<TechnologienPage/>, document.body)
    },

    kontakt () {
        React.render(<KontaktPage/>, document.body)
    }
})