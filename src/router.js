'use strict'

import React from 'react'
import Router from 'react-router'
import Favicon from 'react-favicon'
import Navbar from 'react-bootstrap/lib/Navbar'
import PublicPage from './pages/public'
import LeitbildPage from './pages/leitbild'
import ProjektePage from './pages/projekte'
import TechnologienPage from './pages/technologien'
import KontaktPage from './pages/kontakt'
import FourOhFourPage from './pages/fourOhFour'
import faviconImage from '../favicon.ico'

const DefaultRoute = Router.DefaultRoute
const NotFoundRoute = Router.NotFoundRoute
const Link = Router.Link
const Route = Router.Route
const RouteHandler = Router.RouteHandler

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
                  <Link to='app' className='navbar-brand'>Gabriel Software</Link>
                </div>
                <div className='collapse navbar-collapse'>
                  <ul className='nav navbar-nav'>
                    <li><Link to='leitbild'>Leitbild</Link></li>
                    <li><Link to='projekte'>Projekte</Link></li>
                    <li><Link to='technologien'>Technologien</Link></li>
                  </ul>
                  <ul className='nav navbar-nav navbar-right'>
                    <li className='kontaktNav'><Link to='kontakt'>Kontakt</Link></li>
                  </ul>
                </div>
              </div>
            </Navbar>
          </div>
          <div className='container'>
            <RouteHandler/>
          </div>
        </div>
      )
    }
  })

  const routes = (
    <Route name='app' path='/' handler={App}>
      <Route name='public' handler={PublicPage}/>
      <Route name='leitbild' handler={LeitbildPage}/>
      <Route name='projekte' handler={ProjektePage}/>
      <Route name='technologien' handler={TechnologienPage}/>
      <Route name='kontakt' handler={KontaktPage}/>
      <NotFoundRoute handler={FourOhFourPage}/>
      <DefaultRoute handler={PublicPage}/>
    </Route>
  )

  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body)
  })
}
