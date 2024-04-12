import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for routing
import './styles/Navbar.css'; // Importing the CSS file

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="nav-title">
        MediScan
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="btn-log">
        <Link to="/login">Login/Signup</Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;