/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict';

import React from 'react'

export default React.createClass({
    displayName: 'MessagePage',

    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
            </div>
        )
    }
})