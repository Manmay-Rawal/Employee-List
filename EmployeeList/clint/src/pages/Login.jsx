import React from 'react'
import "./Login.css"
function Login() {
    return (
        <>
        <div className="card">
            <h2>Login</h2>
            <form action="">
                <input type="text" placeholder='Login id' />
                <input type="password" placeholder='Login id' />
                <button type='submit'>Login</button>
            </form>
        </div>
        </>
    )
}

                export default Login