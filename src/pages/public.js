'use strict'

import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

const PublicPage = () => (
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
        style={{fontWeight: 400}}
      >
        ...damit Sie sich auf Ihre Arbeit konzen&shy;trieren können
      </p>
    </Jumbotron>

    <div
      className='row marketing'
    >
      <div
        className='col-lg-4 col-md-6'
      >
        <div
          className='glyphicon glyphicon-cloud'
          style={{fontSize: 88}}
        />
        <h4
          style={{marginTop: 0}}
        >
          Web-Anwendungen
        </h4>
        <ul>
          <li>
            mit Datenbank- und Anwendungs-Server
          </li>
          <li>
            im Intranet oder Internet
          </li>
          <li>
            nach Wunsch mobile und offline first
          </li>
          <li>
            ideal für Geräte- oder Firmen-Übergreifende Zusammenarbeit
          </li>
        </ul>
      </div>
      <div
        className='col-lg-4 col-md-6'
      >
        <div
          className='glyphicon glyphicon-hdd'
          style={{fontSize: 63, marginTop: 10, marginBottom: 7}}
        />
        <h4>
          Desktop-Anwendungen
        </h4>
        <ul>
          <li>
            lokal installiert
          </li>
          <li>
            auf Windows, Mac und Linux
          </li>
          <li>
            besonders leistungsfähig oder:
          </li>
          <li>
            beinahe Null-Unterhalts-Lösungen möglich
          </li>
        </ul>
      </div>
      <div
        className='col-lg-4 col-md-12'
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

PublicPage.displayName = 'PublicPage'

export default PublicPage
