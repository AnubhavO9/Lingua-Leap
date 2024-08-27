import React from 'react';
import '../Layouts/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fonttsize background">
        <Link className="navbar-brand" to="#">
          <img src="image/lingua.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-item nav-link teextblue" to="/">
              Home <span className="sr-only"></span>
            </Link>
            <Link className="nav-item nav-link" to="/about">
              About
            </Link>
            <Link className="nav-item nav-link" to="/services">
              Services
            </Link>
            <Link className="nav-item nav-link" to="/footer">
              Contact Us
            </Link>
            <Link className="nav-item nav-link btn-getstarted btn backimgnav text-white" to="/loginportal">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;