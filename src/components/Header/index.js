import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ml"
                className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
              >
                Machine Learning
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/uwbootcamp"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              >
                UW Bootcamp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar