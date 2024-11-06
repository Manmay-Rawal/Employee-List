import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
    <nav>
        <div className="navbar-link">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/login">Login</a>
            <a href="/logout">Logout</a>
        </div>
    </nav>
    </>
  )
}

export default Home