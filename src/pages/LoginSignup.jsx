import React from 'react'
import Register from '../components/Register'

const LoginSignup = () => {
  return (
    <div className='LoginSignup' style={{height:"100vh"}}>
        {/* <div className="login-container">
            <h1>Sign Up</h1>
            <form action="">
                <input type="text" required/>
                <input type="text" required/>
                <input type="text" required/>
            </form>
            <button>Continue</button>

            <p>Already have an account? <span>Login here</span></p>

        <div className="agree">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        </div> */}

        <Register />

        
    </div>
  )
}

export default LoginSignup