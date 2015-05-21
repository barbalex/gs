/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import React from 'react'
import cx from 'classnames'
import Navbar from 'react-bootstrap/lib/Navbar'

export default React.createClass({
  displayName: 'Layout',

  propTypes: {
    children: React.PropTypes.element,
    pageName: React.PropTypes.string
  },

  handleClick () {

  },

  render () {
    const classesLeitbild = cx({'leitbild_menu': true, 'js-menu': true, 'active': this.props.pageName === 'leitbild'})
    const classesProjekte = cx({'projekte_menu': true, 'js-menu': true, 'active': this.props.pageName === 'projekte'})
    const classesTechnologien = cx({'technologien_menu': true, 'js-menu': true, 'active': this.props.pageName === 'technologien'})
    const classesKontakt = cx({'kontakt_menu': true, 'js-menu': true, 'active': this.props.pageName === 'kontakt'})
    return (
      <div>
        <div className='header'>
          <Navbar inverse fixedTop>
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
                  <li className={classesLeitbild}><a href='/leitbild'>Leitbild</a></li>
                  <li className={classesProjekte}><a href='/projekte'>Projekte</a></li>
                  <li className={classesTechnologien}><a href='/technologien'>Technologien</a></li>
                </ul>
                <ul className='nav navbar-nav navbar-right'>
                  <li className={classesKontakt}><a href='/kontakt'>Kontakt</a></li>
                </ul>
              </div>
            </div>
          </Navbar>
        </div>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
})
