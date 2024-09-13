import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  // Handle scroll event to toggle the navbar style
  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  // Toggle the menu active state
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <h1><Link to="/" onClick={closeMenu}>ACONEWS</Link></h1>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuActive ? 'active' : ''}`}></span>
        <span className={`bar ${menuActive ? 'active' : ''}`}></span>
        <span className={`bar ${menuActive ? 'active' : ''}`}></span>
      </div>
      <nav className={`navbar-links ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/category/world" onClick={closeMenu}>World</Link></li>
          <li><Link to="/category/technology" onClick={closeMenu}>Technology</Link></li>
          <li><Link to="/category/sports" onClick={closeMenu}>Sports</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
