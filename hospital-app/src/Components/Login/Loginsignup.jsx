import React, { useState } from 'react'
import './login.css'
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import axios from "axios"


const Loginsignup = () => {

  const [Username,setUsername]= useState('')
  const [Password,setPassword]= useState('')

  async function Submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost/4000/",{
        Username,Password
      })

    } catch (e) {
      console.log(e)
    }
    
  }

  return (
    <>
      <div className="login-signup">
          <div className="backgroung-img">
            <div className="login-contaier">
              <h1>Login</h1>
              <div className="input-box">
                <input className='input' type='text' onClick={(e)=>{setUsername(e.target.value)}} placeholder='Username' required/>
                <FaUser className='icon'/>
              </div>
              <div className="input-box">
                <input className='input' type='password' onClick={(e)=>{setPassword(e.target.value)}} placeholder='password' required />
                <FaLock className='icon'/>
              </div>
              <div className="remember-forget">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forget password</a>
              </div>
              <button type='submit' onClick={Submit}>Login</button>
              <div className="Registet-link">
                <p>
                  Don't have an account?
                  <a>
                    <strong>Register here</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Loginsignup
