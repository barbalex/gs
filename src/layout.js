/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import React from 'react'

export default React.createClass({
    displayName: 'Layout',

    render () {
        return (
            <div>
                <div className='header'>
                    <nav className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
                        <div className='container'>
                            <div className='navbar-header'>
                                <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                                    <span className='sr-only'>Toggle navigation</span>
                                    <span className='icon-bar'></span>
                                    <span className='icon-bar'></span>
                                    <span className='icon-bar'></span>
                                </button>
                                <a className='navbar-brand' href='/'>Gabriel Software</a>
                            </div>
                            <div className='collapse navbar-collapse'>
                                <ul className='nav navbar-nav'>
                                  <li><a href='/leitbild' className='leitbild_menu'>Leitbild</a></li>
                                  <li><a href='/projekte' className='projekte_menu'>Projekte</a></li>
                                  <li><a href='/technologien' className='technologien_menu'>Technologien</a></li>
                                </ul>
                                <ul className='nav navbar-nav navbar-right'>
                                  <li><a href='/kontakt' className='kontakt_menu'>Kontakt</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        )
    }
})