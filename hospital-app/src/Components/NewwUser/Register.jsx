import React from 'react'
import './login.css'
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Register = () => {
  return (
    <div className="login-signup">
          <div className="backgroung-img">
            <div className="login-contaier">
              <h1>Sign-up</h1>
              <div className="input-box">
                <input className='input' type='text' placeholder='Username' required/>
                <FaUser className='icon'/>
              </div>
              <div className="input-box">
                <input className='input' type='email' placeholder='Email' required/>
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
                <a href="#">Forget password</a>
              </div>
              <button type="submit">Sign-up</button>
              <div className="Registet-link">
                <p>
                  Don't have an account?{' '}
                  <a>
                    <strong>Register here</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Register
