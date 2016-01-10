'use strict'

import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import accessImg from '../../images/access2.png'

export default React.createClass({
  displayName: 'PublicPage',

  render () {
    return (
      <div
        id='home'
        className='page home'
      >
        <Jumbotron>
          <h1>
            Gabriel Software
          </h1>
          <ul>
            <li>
              einfach
            </li>
            <li>
              individuell
            </li>
            <li>
              zuverlässig
            </li>
          </ul>
          <p
            className='lead'
          >
            ...damit Sie sich auf Ihre Arbeit konzen&shy;trieren können
          </p>
        </Jumbotron>

        <div
          className='row marketing'
        >
          <div
            className='col-lg-4'
          >
            <div
              className='glyphicon glyphicon-cloud'
              style={{fontSize: 88}} /
            >
            <h4
              style={{marginTop: 0}}
            >
              Web-Anwendungen
            </h4>
            <ul>
              <li>
                zweckmässige Datenbank&shy;technologie
              </li>
              <li>
                lokal installiert, im Intranet oder im Internet
              </li>
              <li>
                professionell aufgebaut und dokumentiert
              </li>
            </ul>
          </div>
          <div
            className='col-lg-4'
          >
            <img
              src={accessImg}
              height='82'
              width='82' /
            >
            <h4>
              Access-Anwendungen
            </h4>
            <ul>
              <li>
                firmenintern
              </li>
              <li>
                rasche Entwicklung
              </li>
            </ul>
          </div>
          <div
            className='col-lg-4'
          >
            <div
              className='glyphicon glyphicon-comment'
              style={{fontSize: 78}}
            >
            </div>
            <h4>
              Beratung
            </h4>
            <ul>
              <li>
                Bedürfnisse abklären...
              </li>
              <li>
                ...und in den 'Fachjargon' von Software&shy;ingenieuren übersetzen
              </li>
              <li>
                Risiken minimieren
              </li>
              <li>
                unabhängige Meinung
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})
