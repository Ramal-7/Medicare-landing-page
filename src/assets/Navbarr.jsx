import React from 'react';
import './Navbarr.css';

function Navbarr({ showHome, showLogin, loggedIn }){
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={showHome}>MediCare</div>
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#doctors">Doctors</a></li> 
          <li><button onClick={showLogin}>Login</button></li>
      </ul>
    </nav>
  );
};
export default Navbarr;