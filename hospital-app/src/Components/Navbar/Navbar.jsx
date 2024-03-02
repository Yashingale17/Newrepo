import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    const [activeSection, setActiveSection] = useState('Home');

    return (
        <>
            <header className='Stickey'>
                <nav className="nav-second">
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
                            <li className={activeSection === 'Home' ? 'active' : ''} > <Link to="/" onClick={() => setActiveSection('Home')}>Home</Link></li>
                            <li className={activeSection === 'About' ? 'active' : ''} > <Link to="/About" onClick={() => setActiveSection('About')}>About</Link></li>
                            <li className={activeSection === 'Doctor' ? 'active' : ''} > <Link to="/Doctor" onClick={() => setActiveSection('Doctor')}>Doctor</Link></li>
                            <li className={activeSection === 'Services' ? 'active' : ''} > <Link to="/Services" onClick={() => setActiveSection('Services')}>Services</Link></li>
                            <li className={activeSection === 'Department' ? 'active' : ''} > <Link to="/Department" onClick={() => setActiveSection('Department')}>Department</Link></li>
                            <li className={activeSection === 'BookAppointment' ? 'active' : ''} > <Link to="/BookAppointment" onClick={() => setActiveSection('BookAppointment')}>BookAppointment</Link></li>
                        </ul>
                        <div className="Login-register">
                            <Link to="/Login" className='login-btn'>Login</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <body>
                
            </body>
        </>

    )
}

export default Navbar
