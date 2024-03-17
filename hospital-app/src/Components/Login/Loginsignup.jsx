import React, { useState } from 'react'
import './login.css'
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';


const Loginsignup = () => {

  const navigateHome = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [UserSignUp, setUserSignup] = useState({
    email: "", password: ""
  });

  const handleChange = (e) => {
    setUserSignup({ ...UserSignUp, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!UserSignUp.email || !UserSignUp.password) {
      return toast.error("Fill all filds")
    }
    else {
      signInWithEmailAndPassword
        (
          auth,
          UserSignUp.email,
          UserSignUp.password
        )
        .then(async (res) => {
          navigateHome('/');

        })
        .catch((err) => toast.error(err.message))
    }
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false); 
        navigateHome('/login'); 
      
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <div className="login-signup">
        <div className="backgroung-img">
          <form>
            <div className="login-contaier">
              <h1>Login</h1>
              <div className="input-box">
                <input autoComplete='off' className='input' type='email' value={UserSignUp.email} onChange={handleChange} name='email' placeholder='Email' required />
                <IoMdMail className='icon' />
              </div>
              <div className="input-box">
                <input autoComplete='off' className='input' type='password' value={UserSignUp.password} name='password' onChange={handleChange}
                  placeholder='password' required />
                <FaLock className='icon' />
              </div>
              <button type='submit' onClick={isLoggedIn ? handleLogout : handleSubmit}>
                {isLoggedIn ? 'Logout' : 'Login'}</button>
              <div className="Registet-link">
                <p>
                  Don't have an account?
                  <Link to="/Signup">
                    <strong> Sign Up</strong>
                  </Link>
                </p>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Loginsignup
