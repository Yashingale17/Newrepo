import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";

const Adminpage = () => {
    return (
        <>
            <div className="login-signup">
          <div className="backgroung-img">
            <div className="login-contaier">
              <h1>Admin Login</h1> {/* Changed title to "Admin Login" */}
              <div className="input-box">
                <input className='input' type='text' placeholder='Admin-ID' required/>
                <FaUser className='icon'/>
              </div>
              <div className="input-box">
                <input className='input' type='password' placeholder='Admin password' required />
                <FaLock className='icon'/>
              </div>
              <div className="remember-forget">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                
              </div>
              <button type="submit">Login</button>
            </div>
          </div>
      </div>
        </>
    )
}

export default Adminpage
