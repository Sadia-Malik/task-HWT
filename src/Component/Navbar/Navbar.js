import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <li className="navbar-item"><a href="#Logo">Logo</a></li>
        {/* <img src="https://via.placeholder.com/150x50" alt="Logo" /> */}
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
        <li className="navbar-item"><a href="#Library">Library</a></li>
        <li className="navbar-item"><a href="#Previous">Previous</a></li>
        <li className="navbar-item"><a href="#Next">Next</a></li>
        <li className="navbar-item"><a href="#Logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
