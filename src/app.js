/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict';

import app    from 'ampersand-app'
import script from 'scriptjs'
import styles from './styles/main.styl'
import Router from './router'

window.app = app // expose app to the browser console

app.extend({
    init () {
        this.router = new Router
        this.router.history.start()
        script('https://maps.googleapis.com/maps/api/js?sensor=false', function () {
            console.log('google maps api is ready')
        });
    }
})

app.init()