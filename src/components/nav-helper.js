/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import React from 'react'
import app from 'ampersand-app'
import localLinks from 'local-links'

export default React.createClass({
  displayName: 'NavHelper',

  propTypes: {
    children: React.PropTypes.element
  },

  onClick (event) {
    const localpath = localLinks.getLocalPathname(event)

    if (localpath) {
      event.preventDefault()
      app.router.history.navigate(localpath)
    }
  },

  render () {
    return (
      <div onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
})
