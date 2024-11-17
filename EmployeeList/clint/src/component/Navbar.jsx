import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="container-Navbar">
          <div className="logo">
            <a href="/" className="download-logo" alt="Logo"></a>
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
</svg>
          </div>
          <div className={`navbar-link ${isOpen ? 'show' : ''}`}>
            <NavLink className="NavText" to="/">MEN</NavLink>
            <NavLink className="NavText" to="/about">WOMEN</NavLink>
            <NavLink className="NavText" to="/about">KIDS</NavLink>
            <form className="search-form max-w-md mx-auto">
              <label htmlFor="default-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <input
                  type="search"
                  id="default-search"
                  className="Search-Bar p-4 text-sm border border-gray-300 rounded-lg"
                  placeholder="Search Product..."
                  required
                />
                <button type="submit">
                  Search
                </button>
              </div>
            </form>

            <NavLink className="NavText-login" to="/login">LOGIN</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
