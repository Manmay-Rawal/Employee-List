import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [ColorChanged, setColorChange] = useState(false);

  const handleClick = () => {
    setColorChange(!ColorChanged);
  };

  return (
    <div className={`login ${ColorChanged ? 'bg-changed' : ''}`} onClick={handleClick}>
      <div className="card">
        <label className="LoginHeader">Login or Signup</label>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
        <button className="LoginButton">Login</button>
      </div>
    </div>
  );
}

export default Login;
