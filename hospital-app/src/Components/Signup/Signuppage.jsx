import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';



const Signuppage = () => {

    const navigateLogin = useNavigate();

    const [UserSignUp, setUserSignup] = useState({
        username: "", email: "", password: ""
    });

    const handleChange = (e) => {
        setUserSignup({ ...UserSignUp, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!UserSignUp.username || !UserSignUp.email || !UserSignUp.password) {
            return toast.error("Fill all filds")
        }
        else {
            createUserWithEmailAndPassword
            (
                auth, 
                UserSignUp.email,
                UserSignUp.password
            )
            .then(async(res) => {
                const user = res.user

                await updateProfile(user,{
                    displayName:UserSignUp.username
                })

                navigateLogin('/Login')
            
            })
            .catch((err) => toast.error(err.message))
        }
    }



    return (
        <div>
            <div className="login-signup">
                <div className="backgroung-img">
                    <form>
                        <div className="login-contaier">
                            <h1>Sign-up</h1>
                            <div className="input-box">
                                <input autoComplete='off' className='input' type='text' value={UserSignUp.username} onChange={handleChange} name='username' placeholder='Username' required />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input autoComplete='off' className='input' type='email' value={UserSignUp.email} onChange={handleChange} name='email' placeholder='Email' required />
                                <IoMdMail className='icon' />
                            </div>
                            <div className="input-box">
                                <input autoComplete='off' className='input' type='password' value={UserSignUp.password} name='password' onChange={handleChange}
                                    placeholder='password' required />
                                <FaLock className='icon' />
                            </div>
                            <button type="submit" onClick={handleSubmit}>Sign-up</button>
                            <div className="Registet-link">
                                <p>
                                    Already have an account?
                                    <Link to="/Login">
                                        <strong> Login</strong>
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signuppage
