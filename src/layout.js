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
                  <li><a href='/leitbild' className='leitbild_menu'>Leitbild</a></li>
                  <li><a href='/projekte' className='projekte_menu'>Projekte</a></li>
                  <li><a href='/technologien' className='technologien_menu'>Technologien</a></li>
                </ul>
                <ul className='nav navbar-nav navbar-right'>
                  <li><a href='/kontakt' className='kontakt_menu'>Kontakt</a></li>
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
