'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Favicon from 'react-favicon'
import Navbar from 'react-bootstrap/lib/Navbar'
import PublicPage from './pages/public'
import LeitbildPage from './pages/leitbild'
import ProjektePage from './pages/projekte'
import TechnologienPage from './pages/technologien'
import KontaktPage from './pages/kontakt'
import FourOhFourPage from './pages/fourOhFour'
import faviconImage from '../favicon.ico'

export default function () {
  const App = React.createClass({
    displayName: 'HomePage',

    render () {
      return (
        <div>
          <div className='header'>
          <Favicon url={[faviconImage]}/>
            <Navbar inverse fixedTop>
              <div className='container'>
                <div className='navbar-header'>
                  <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                    <span className='sr-only'>Toggle navigation</span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                  </button>
                  <Link to='/' className='navbar-brand'>Gabriel Software</Link>
                </div>
                <div className='collapse navbar-collapse'>
                  <ul className='nav navbar-nav'>
                    <li><Link to='leitbild' activeClassName='active'>Leitbild</Link></li>
                    <li><Link to='projekte' activeClassName='active'>Projekte</Link></li>
                    <li><Link to='technologien' activeClassName='active'>Technologien</Link></li>
                  </ul>
                  <ul className='nav navbar-nav navbar-right'>
                    <li className='kontaktNav'><Link to='kontakt' activeClassName='active'>Kontakt</Link></li>
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

  let history = createBrowserHistory()
  render(
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PublicPage}/>
        <Route path='leitbild' component={LeitbildPage}/>
        <Route path='projekte' component={ProjektePage}/>
        <Route path='technologien' component={TechnologienPage}/>
        <Route path='kontakt' component={KontaktPage}/>
        <Route path='*' component={FourOhFourPage}/>
      </Route>
    </Router>,
    document.body
  )
}
