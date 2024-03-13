import React, { useState } from 'react'
import './Appointment.css'

const Appointment = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        preferredDateTime: '',
        doctor: '',
        reason: '',
        insurance: '',
        confirmation: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend or display a confirmation message
        console.log(formData);
    };



    return (
        <div className="appointment-container">
            <form className="appointment-form" onSubmit={handleSubmit}>
                <h2>Book an Appointment</h2>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="preferredDateTime">Preferred Date and Time:</label>
                    <input
                        type="datetime-local"
                        id="preferredDateTime"
                        name="preferredDateTime"
                        value={formData.preferredDateTime}
                        onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="doctor">Doctor/Specialist:</label>
                    <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} required>
                        <option value="">Select Doctor/Specialist</option>
                        {/* Add options for doctors here */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="reason">Reason for Appointment:</label>
                    <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="insurance">Insurance Information:</label>
                    <input
                        type="text"
                        id="insurance"
                        name="insurance"
                        value={formData.insurance}
                        onChange={handleChange} />
                </div>
                <div className="input-checkbox-label">
                    <input
                        type="checkbox"
                        id="confirmation"
                        name="confirmation"
                        checked={formData.confirmation}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="confirmation">I confirm my appointment booking and agree to the terms and conditions.</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Appointment
