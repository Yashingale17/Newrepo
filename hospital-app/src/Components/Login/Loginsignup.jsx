import React, { useState } from 'react'
import './login.css'
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Loginsignup = () => {

  const [showLoginForm, setShowLoginForm] = useState(true); // State to toggle login form visibility
  const [showRegisterForm, setShowRegisterForm] = useState(false); // State to toggle register form visibility

  // Function to toggle between login and register forms
  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <>
      <div className="login-signup">
        {showLoginForm && (
          <div className="backgroung-img">
            <div className="login-contaier">
              <h1>Login</h1>
              <div className="input-box">
                <input className='input' type='text' placeholder='Username' required/>
                <FaUser className='icon'/>
              </div>
              <div className="input-box">
                <input className='input' type='password' placeholder='password' required />
                <FaLock className='icon'/>
              </div>
              <div className="remember-forget">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forget password</a>
              </div>
              <button type="submit">Login</button>
              <div className="Registet-link">
                <p>
                  Don't have an account?{' '}
                  <a onClick={toggleForm}>
                    <strong>Register here</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
        {!showLoginForm && (
          <div className="backgroung-img">
            <div className="login-contaier">
              <h1>Register-User</h1>
              <div className="input-box">
                <input className='input' type='text' placeholder='Username' required/>
                <FaUser className='icon'/>
              </div>
              <div className="input-box">
                <input className='input' type='email' placeholder='Email' required />
                <IoMdMail className='icon'/>
              </div>
              <div className="input-box">
                <input className='input' type='password' placeholder='password' required />
                <FaLock className='icon'/>
              </div>
              <div className="remember-forget">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
              <button type="submit">Sign up</button>
              <div className="Registet-link">
                <p>
                  Already have an account?{' '}
                  <a onClick={toggleForm}>
                    <strong>Login</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Loginsignup
