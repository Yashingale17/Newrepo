import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = ({ userName }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

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
                                <a href='#'>
                                    <i class="fa-regular fa-envelope">
                                    </i>
                                    hospitalportal@gmail.com
                                </a>
                            </div>

                            <div className='Social'>
                                <div className='insta'>
                                    <a
                                        href='#'
                                        target='_blank'>
                                        <i class="fa-brands fa-instagram">
                                        </i>
                                    </a>
                                </div>

                                <div className='facebook'>
                                    <a href='#'
                                        target='_blamk'>
                                        <i class="fa-brands fa-facebook">
                                        </i>
                                    </a>
                                </div>

                                <div className='Twitter'>
                                    <a
                                        href='#'>
                                        <i class="fa-brands fa-x-twitter"></i>
                                    </a>
                                </div>

                                <div className='git'>
                                    <a
                                        href='#'>
                                        <i class="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="navbar-main">
                        <div className='logo-name'>
                            <div className='img'>
                            </div>
                        </div>
                        <ul className="nav-links">
                            <li
                                onClick={scrollToTop}
                                className={activeSection === 'Home' ? 'active' : ''}>
                                <Link to="/" onClick={() => setActiveSection('Home')}>Home</Link>
                            </li>
                            <li
                                onClick={scrollToTop}
                                className={activeSection === 'About' ? 'active' : ''} >
                                <Link to="/About" onClick={() => setActiveSection('About')}>About</Link>
                            </li>
                            <li
                                onClick={scrollToTop}
                                className={activeSection === 'Doctor' ? 'active' : ''} >
                                <Link to="/Doctor" onClick={() => setActiveSection('Doctor')}>Doctor</Link>
                            </li>
                            <li
                                onClick={scrollToTop}
                                className={activeSection === 'Services' ? 'active' : ''} >
                                <Link to="/Services" onClick={() => setActiveSection('Services')}>Services</Link>
                            </li>
                            <li
                                onClick={scrollToTop}
                                className={activeSection === 'Department' ? 'active' : ''} >
                                <Link to="/Department" onClick={() => setActiveSection('Department')}>Department</Link>
                            </li>
                            <li
                                onClick={scrollToTop}
                                className={activeSection === 'Reportpage' ? 'active' : ''} >
                                <Link to="/Reportpage" onClick={() => setActiveSection('Reportpage')}>Reports</Link>
                            </li>
                            <li
                                onClick={scrollToTop}
                                className={activeSection === 'BookAppointment' ? 'active' : ''} >
                                <Link to="/BookAppointment" onClick={() => setActiveSection('BookAppointment')}>BookAppointment</Link>
                            </li>
                            <li
                                onClick={scrollToTop}
                                className={activeSection === 'Reportpage' ? 'active' : ''} >
                                <Link to="/BookBed" onClick={() => setActiveSection('BookBed')}>Schedule a Stay </Link>
                            </li>
                        </ul>
                        <div className="Login-register">
                            <span>{userName}</span>
                            <Link to="/Login" className='login-btn'>Login</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>


    )
}

export default Navbar
