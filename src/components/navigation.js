import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navigation = (props) => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary justify-content-between">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Library
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item  ${props.location.pathname === '/' ? 'active' : ''}`}>
                <Link className="nav-link" to="/">
                  Recently Read
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className={`nav-item  ${props.location.pathname === '/to-read' ? 'active' : ''}`}>
                <Link className="nav-link" to="/to-read">
                  To Read
                </Link>
              </li>
              <li className={`nav-item  ${props.location.pathname === '/highly-rated' ? 'active' : ''}`}>
                <Link className="nav-link" to="/highly-rated">
                  Highly Rated
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Navigation)
