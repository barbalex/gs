/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'

export default React.createClass({
  displayName: 'Layout',

  propTypes: {
    children: React.PropTypes.element
  },

  handleClick () {

  },

  render () {
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
                  <li className='leitbild_menu js-menu'><a href='/leitbild'>Leitbild</a></li>
                  <li className='projekte_menu js-menu'><a href='/projekte'>Projekte</a></li>
                  <li className='technologien_menu js-menu'><a href='/technologien'>Technologien</a></li>
                </ul>
                <ul className='nav navbar-nav navbar-right'>
                  <li className='kontakt_menu js-menu'><a href='/kontakt'>Kontakt</a></li>
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
