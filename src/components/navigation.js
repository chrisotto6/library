import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navigation = (props) => {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-sm navbar-dark bg-secondary justify-content-between">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Library
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class={`nav-item  ${props.location.pathname === '/' ? 'active' : ''}`}>
                <Link class="nav-link" to="/">
                  Recently Read
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class={`nav-item  ${props.location.pathname === '/to-read' ? 'active' : ''}`}>
                <Link class="nav-link" to="/to-read">
                  To Read
                </Link>
              </li>
              <li class={`nav-item  ${props.location.pathname === '/highly-rated' ? 'active' : ''}`}>
                <Link class="nav-link" to="/highly-rated">
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
