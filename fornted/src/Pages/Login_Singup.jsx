import React from 'react'
import './CSS/Loginsignup.css'
const Login_Singup = () => {
  return (
    <div className='loginsingh'>
      <div className="loginsingup-continer">
        <h1>Sign Up</h1>
        <div className="loginsingup-felid">
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsingup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsingup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login_Singup
