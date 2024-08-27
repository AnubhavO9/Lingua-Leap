import React from 'react';
import './Header2.css';
import { Link } from 'react-router-dom';

function Header2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fonttsize background">
      <Link className="navbar-brand" to="/">
        <img src="image/lingua.png" alt="Lingua Logo" />
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNavAltMarkup" 
        aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link className="nav-item nav-link teextblue" to="/">Home <span className="sr-only">(current)</span></Link>
          <Link className="nav-item nav-link" to="/about">Contact Us</Link>
          <Link className="nav-item nav-link" to="/services">Calendar</Link>
          <Link className="nav-item nav-link" to="/footer">Reviews</Link>
          <Link className="btn-getstarted nav-link btn text-white" to="/loginportal">
            <img src="image/user.png" alt="User Icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header2;
