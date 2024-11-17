import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <div className="container-Navbar">
          <div className='logo'>
            <a href='/' className='download-logo' alt="not working" ></a>
          </div>
          <div className="navbar-link">
            <NavLink className="NavText" to="/">MEN</NavLink>
            <NavLink className="NavText" to="/about">WOMEN</NavLink>
            <NavLink className="NavText" to="/about">KIDS</NavLink>
            <input type="text" className='Search-Bar' placeholder='Search for product' />
            <a href="" className='search'><i class="fa-solid fa-magnifying-glass"></i></a>
            <NavLink className="NavText-login" to="/login">LOGIN</NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar