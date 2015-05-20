/*jslint node: true, browser: true, nomen: true, todo: true, asi: true */
'use strict'

import React     from 'react'
//import accessImg from '../../images/access2.png'  // TODO ERROR: Unexpected character '´┐¢' (1:0)

export default React.createClass({
  displayName: 'PublicPage',

  render () {
    return (
      <div id='home' className='page home'>
        <div className='jumbotron'>
          <h1>Gabriel Software</h1>
          <ul>
            <li>einfach</li>
            <li>individuell</li>
            <li>zuverlässig</li>
          </ul>
          <p className='lead'>...damit Sie sich auf Ihre Arbeit konzen&shy;trieren können</p>
        </div>

        <div className='row marketing'>
          <div className='col-lg-4'>
            <div className='glyphicon glyphicon-cloud' style={{fontSize: 88 + 'px'}}></div>
            <h4 style={{marginTop: 0 + 'px'}}>Web-Anwendungen</h4>
            <ul>
              <li>zweckmässige Datenbank&shy;technologie</li>
              <li>lokal installiert, im Intranet oder im Internet</li>
              <li>professionell aufgebaut und dokumentiert</li>
            </ul>
          </div>
          <div className='col-lg-4'>
            <img src='/images/access2.png' alt='' height='82' width='82'/>
            <h4>Access-Anwendungen</h4>
            <ul>
              <li>firmenintern</li>
              <li>rasche Entwicklung</li>
              <li>Prototypen für Web-Anwendungen</li>
            </ul>
          </div>
          <div className='col-lg-4'>
            <div className='glyphicon glyphicon-comment' style={{fontSize: 78 + 'px'}}></div>
            <h4 style={{marginBottom: 0 + 'px'}}>Beratung</h4>
            <p>bei der Entwicklung von Software:</p>
            <ul>
              <li>Bedürfnisse abklären...</li>
              <li>...und in den 'Fachjargon' von Software&shy;ingenieuren übersetzen</li>
              <li>Risiken minimieren</li>
              <li>unabhängige Meinung</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})