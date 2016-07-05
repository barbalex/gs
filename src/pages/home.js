import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import { Link } from 'react-router'

const Home = (props) =>
  <div>
    <div
      className="header"
    >
      <Navbar
        inverse
        fixedTop
      >
        <div
          className="container"
        >
          <div
            className="navbar-header"
          >
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span
                className="sr-only"
              >
                Toggle navigation
              </span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link
              to="/"
              className="navbar-brand"
            >
              Gabriel Software
            </Link>
          </div>
          <div
            className="collapse navbar-collapse"
          >
            <ul
              className="nav navbar-nav"
            >
              <li>
                <Link
                  to="leitbild"
                  activeClassName="active"
                >
                  Leitbild
                </Link>
              </li>
              <li>
                <Link
                  to="projekte"
                  activeClassName="active"
                >
                  Projekte
                </Link>
              </li>
              <li>
                <Link
                  to="technologien"
                  activeClassName="active"
                >
                  Technologien
                </Link>
              </li>
            </ul>
            <ul
              className="nav navbar-nav navbar-right"
            >
              <li
                className="kontaktNav"
              >
                <Link
                  to="kontakt"
                  activeClassName="active"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
    <div
      className="container"
    >
      {props.children}
    </div>
  </div>

Home.displayName = 'Home'

export default Home
