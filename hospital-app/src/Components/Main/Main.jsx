import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import { CiStar } from "react-icons/ci";
import { FaStethoscope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Main = () => {
  return (
    <div className='Home-container'>
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

