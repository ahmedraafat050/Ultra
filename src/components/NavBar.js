import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light w-100">
        <div className="container">
          <a className="navbar-brand text-dark fw-bold fs-2" href="/">
            Ultra Profile
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-bold" href="#work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold" to="/">
                  Protfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold" to="/">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
