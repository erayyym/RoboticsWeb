import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ menuOpen, toggleMenu }) => {
  const [bgColor, setBgColor] = useState('#000'); // Initial black background

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && bgColor !== '#fff') {
        setBgColor('#fff'); // Change to white on scroll
        document.querySelector('.logo-lower').classList.add('show');
        document.querySelector('.logo-upper').classList.add('hide');
      } else if (window.scrollY === 0 && bgColor !== '#000') {
        setBgColor('#000'); // Change to black on scroll up
        document.querySelector('.logo-lower').classList.remove('show');
        document.querySelector('.logo-upper').classList.remove('hide');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bgColor]);

  const isLight = bgColor === '#fff'; 
  return (
    <>
    <header className="header" style={{ backgroundColor: bgColor }}>
      <div className="header-content">
        <div className="logo">
          <Link to="/" className="logo-link logo-upper">
            <img src="/logo.png" alt="Robot Studio Logo" />
            <span>Robot Studio</span>
          </Link>
          <Link to="/" className="logo-link logo-lower">
            <img src="/logo.png" alt="Robot Studio Logo" />
            <span>Robot Studio</span>
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-links ${isLight ? 'light' : ''}`}>
        <NavLink exact to="/" activeClassName="active">Projects</NavLink>
            <NavLink to="/publications" activeClassName="active">Publications</NavLink>
            <NavLink to="/people" activeClassName="active">People</NavLink>
            <NavLink to="/news" activeClassName="active">News</NavLink>
            <NavLink to="/opportunity" activeClassName="active">Opportunities</NavLink>
          </nav>
      </div>
    </header>

    <nav className={`nav-menu ${menuOpen ? 'open' : ''}`} style={{ backgroundColor: bgColor }} >
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <NavLink exact to="/" onClick={toggleMenu} activeClassName="active">Projects</NavLink>
        <NavLink to="/publications" onClick={toggleMenu} activeClassName="active">Publications</NavLink>
        <NavLink to="/people" onClick={toggleMenu} activeClassName="active">People</NavLink>
        <NavLink to="/news" onClick={toggleMenu} activeClassName="active">News</NavLink>
        <NavLink to="/opportunity" onClick={toggleMenu} activeClassName="active">Opportunities</NavLink>
      </nav>
    </>

  );
};

export default Header;
