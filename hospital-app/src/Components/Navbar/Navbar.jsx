import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return (
        <nav className="nav-second">
            <div>
                <div className='Nav-first'>
                    <div className='Container'>
                        <div className='phone'>
                            <p>
                                <i class="fa-solid fa-phone"></i> +919023442500
                            </p>
                        </div>

                        <div className='mail'>
                            <a href='mailto:hospitalportal@gmail.com'> <i class="fa-regular fa-envelope"></i> hospitalportal@gmail.com</a>
                        </div>

                        <div className='Social'>
                            <div className='insta'>
                                <a
                                    href='https://www.instagram.com/invites/contact/?i=l91ptsqr28nh&utm_content=pmzkka9' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                            </div>

                            <div className='facebook'>
                                <a href='https://www.facebook.com/' target='_blamk'><i
                                    class="fa-brands fa-facebook"></i></a>
                            </div>

                            <div className='Twitter'>
                                <a
                                    href='https://x.com/IngaleYashIT/status/1754125011789717800?s=20'> <i
                                        class="fa-brands fa-x-twitter"></i></a>
                            </div>

                            <div className='git'>
                                <a
                                    href='https://github.com/Yashingale17/NewRepo.git'><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="navbar-main">
                    <div className='logo-name'>
                        <div className='img'></div>
                    </div>
                    <ul className="nav-links">
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/About">About</Link></li>
                        <li> <Link to="/Doctor">Doctor</Link></li>
                        <li> <Link to="/Services">Services</Link></li>
                        <li> <Link to="/Department">Department</Link></li>
                        <li> <Link to="/BookAppointment">BookAppointment</Link></li>
                    </ul>
                    <div className="Login-register">
                        <button className="login-btn">Login</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
