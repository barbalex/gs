import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './pages/home'
import PublicPage from './pages/public'
import LeitbildPage from './pages/leitbild'
import ProjektePage from './pages/projekte'
import TechnologienPage from './pages/technologien'
import KontaktPage from './pages/kontakt'
import FourOhFourPage from './pages/fourOhFour'

export default function () {
  render(
    <Router
      history={browserHistory}
    >
      <Route
        path="/"
        component={Home}
      >
        <IndexRoute
          component={PublicPage}
        />
        <Route
          path="leitbild"
          component={LeitbildPage}
        />
        <Route
          path="projekte"
          component={ProjektePage}
        />
        <Route
          path="technologien"
          component={TechnologienPage}
        />
        <Route
          path="kontakt"
          component={KontaktPage}
        />
        <Route
          path="*"
          component={FourOhFourPage}
        />
      </Route>
    </Router>,
    document.getElementById('root')
  )
}
