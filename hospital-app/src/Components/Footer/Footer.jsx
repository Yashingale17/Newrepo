import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__section">
            <h3 className="footer__section-title">Hospital Departments</h3>
            <ul className="footer__list">
              <li>Emergency Medicine</li>
              <li>Cardiology</li>
              <li>Orthopedics</li>
              <li>Neurology</li>
              {/* Add more departments */}
            </ul>
          </div>
          <div className="footer__section">
            <h3 className="footer__section-title">Hospital Services</h3>
            <ul className="footer__list">
              <li>Primary Care</li>
              <li>Surgery</li>
              <li>Imaging</li>
              <li>Physical Therapy</li>
              {/* Add more services */}
            </ul>
          </div>
          <div className="footer__section">
            <h3 className="footer__section-title">Contact Us</h3>
            <p className="footer__contact-info">
              Address: 123 Hospital St, City, Country<br />
              Phone: +123-456-7890<br />
              Email: info@hospital.com
            </p>
          </div>
        </div>
        <div className="footer__copyright">
          <p>&copy; 2024 Hospital CareHub.  All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
