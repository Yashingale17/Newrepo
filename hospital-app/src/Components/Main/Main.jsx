import React, { useState, useEffect } from 'react'
import {useLocation , Link } from 'react-router-dom'
import './main.css'
import { CiStar } from "react-icons/ci";
import { FaStethoscope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Main = () => {

  return (
    <div className='Home-container'>
      <div className="home-img-container">
        <div className="Home-img">
          <div className="image-content-box">
            <div className="image-content-box-title">
              <div className="title-box-image-content">
                The Right Care Starts Here! 
              </div>
            </div>

            <div className="home-page-box">
              <div className="Home-page-boxes">
                <h2>Specialities</h2>
                <p>
                  At <strong>Hospital CareHub</strong>, we offer a wide range of medical specialities to cater to your healthcare needs. From orthopaedic to oncology, and from neurology to gastroenterology, our team of highly skilled doctors is here to take care of you.
                </p>
                <div className="home-to">
                <Link to="/Department" className='Hometo-department'>Explore Specialties</Link>
                </div>
              </div>
              <div className="Home-page-boxes">
              <h2>​Patient Management through Digitalization</h2>
                <p>
                We're enhancing patient care with paperless medical records, ensuring swift access to accurate information across departments at Hospital CareHub. Our goal is to deliver personalised healthcare services with improved infrastructure.
                </p>
                <div className="home-to">
                <Link to="/About" className='Hometo-department'>Learn More</Link>
                </div>
              </div>
              <div className="Home-page-boxes">
              <h2>Well-equipped Rooms</h2>
                <p>
                We understand the importance of a comfortable and healing environment during your hospital stay. Our rooms are designed to provide a peaceful and relaxing atmosphere, equipped with modern amenities to make your stay comfortable.
                </p>
                <div className="home-to">
                <Link to="/Services" className='Hometo-department'>Take a Tour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Appiontment-button">
        <div className='Schedule-title'>Click on Book Appointment to Schedule an Appointment</div>
        <div>
          <Link to="/BookAppointment" className='Hometo-Appiontment'>Book Appointment</Link>
        </div>
      </div>

      <div className="choose-section">
        <div className='section-title'>
          <p>Why Choose Hospital CareHub?</p>
        </div>
        <div className="section-title-body">
          <div className="title-body-contant">
            <div className="body-contant-img"><FaUser /></div>
            <div className="body-content-para">
              <div className='content-para-title'>70,000+</div>
              <div className='para-line'>
                <p>Patients cured in the past 18 years.

                  Hospital CareHub stands for its exceptional

                  healthcare facility & right care.</p>
              </div>
            </div>
          </div>
          <div className="title-body-contant">
            <div className="body-contant-img"><FaStethoscope /></div>
            <div className="body-content-para">
              <div className='content-para-title'>100+ Consultants</div>
              <div className='para-line'>
                <p>
                  Ensuring a wealth of medical expertise for comprehensive patient care and well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="title-body-contant">
            <div className="body-contant-img"><CiStar /></div>
            <div className="body-content-para">
              <div className='content-para-title'>15+ Years</div>
              <div className='para-line'>
                <p>
                  Of remarkable healthcare, offering reliable medical care and support to its patients throughout this time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main

