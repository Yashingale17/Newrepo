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
        <div className='Appointment-container'>
            <form className="appointment-form" onSubmit={handleSubmit}>
                <h2>Book an Appointment</h2>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="preferredDateTime">Preferred Date and Time:</label>
                    <input type="datetime-local" id="preferredDateTime" name="preferredDateTime" value={formData.preferredDateTime} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="doctor">Doctor/Specialist:</label>
                    <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} required>
                        <option value="">Select Doctor/Specialist</option>
                        <option value="Dr.John Doe ">Dr.John Doe </option>
                        <option value="Dr.Robert Wilson ">Dr.Robert Wilson</option>
                        <option value="Dr.Laura Martinez ">Dr.Laura Martinez </option>
                        <option value="Dr.William Adams">Dr.William Adams</option>
                        <option value="Dr.Emily Taylor ">Dr.Emily Taylor</option>
                        <option value="Dr.Samantha Evans">Dr.Samantha Evans</option>
                        <option value="Dr.Daniel Lee ">Dr.Daniel Lee</option>
                        <option value="Dr.Ashley Brown">Dr.Ashley Brown</option>
                        <option value="Dr.Christopher Wilson ">Dr.Christopher Wilson </option>
                        <option value="Dr.Taylor Clark">Dr.Taylor Clark</option>
                        <option value="Dr.Michael Brown">Dr.Michael Brown </option>
                        <option value="Dr.Jessica Hernandez">Dr.Jessica Hernandez</option>
                        <option value="Dr.Jane Smith">Dr.Jane Smith</option>
                        <option value="Dr.Sarah Lee">Dr.Sarah Lee</option>
                        <option value="Dr.David Johnson">Dr.David Johnson </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="reason">Reason for Appointment:</label>
                    <textarea id="reason" name="reason" value={formData.reason} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="insurance">Insurance Information:</label>
                    <input type="text" id="insurance" name="insurance" value={formData.insurance} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="checkbox" id="confirmation" name="confirmation" checked={formData.confirmation} onChange={handleChange} required />
                    <label htmlFor="confirmation">I confirm my appointment booking and agree to the terms and conditions.</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Appointment
