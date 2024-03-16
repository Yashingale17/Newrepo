import React, { useState } from 'react'
import './Appointment.css';
import toast from 'react-hot-toast';


const Appointment = () => {

    const doctors = [
        { value: 'dr-john-doe', label: 'Dr. John Doe' },
        { value: 'dr-jane-smith', label: 'Dr. Jane Smith' },
        { value: 'dr-David-Johnson', label: 'dr.David Johnson' },
        { value: 'dr-Sarah-Lee', label: 'dr.Sarah Lee' },
        { value: 'dr-Michael-Brown', label: 'dr.Michael Brown' },
        { value: 'dr- Emily-Taylor', label: 'dr.Emily Taylor' },
        { value: 'dr-Robert-Wilson', label: 'dr.Robert Wilson' },
        { value: 'dr-Laura-Martinez', label: 'dr.Laura Martinez' },
        { value: 'dr-William-Adams', label: 'dr.William Adams' },
        { value: 'dr-Samantha-Evans', label: 'dr.Samantha Evans' },
        { value: 'dr-Daniel-Lee', label: 'dr.Daniel Lee' },
        { value: 'dr-Ashley-Brown', label: 'dr.Ashley Brown' },
        { value: 'dr-Christopher-Wilson', label: 'dr.Christopher Wilson' },
        { value: 'dr-Jessica-Hernandez', label: 'dr.Jessica Hernandez' },
        { value: 'dr-Taylor-Clark', label: 'dr.Taylor Clark' }
    ];


    const [AppointmentData, setAppointmentdata] = useState(
        {
            fullName: "",
            email: "",
            phone: "",
            preferredDateTime: "",
            doctor: "",
            reason: "",
            insurance: "",
            confirmation: ""

        })

    let name, value
    console.log(AppointmentData)
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setAppointmentdata({ ...AppointmentData, [name]: value })
    }

    const SubmitData = async (e) => {

        const { FullName, email, phone, preferredDateTime, doctor, reason, insurance, confirmation } = AppointmentData;
        e.preventDefault();

        const emptyFields = [];
        for (const key in AppointmentData) {
            if (!AppointmentData[key]) {
                emptyFields.push(key.replace(/([A-Z])/g, ' $1').toUpperCase()); // Capitalize field names for user-friendly display
            }
        }

        if (emptyFields.length > 0) {
            const errorMessage = `Please fill in the following fields:\n- ${emptyFields.join('\n- ')}`;
            toast.error(errorMessage);
            return; // Prevent unnecessary API call if fields are empty
        }

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FullName, email, phone, preferredDateTime, doctor, reason, insurance, confirmation
            })
        }

        const res = await fetch('https://hospital-50195-default-rtdb.firebaseio.com/appointmentdata.json',
            options
        )
        console.log(res)
        if (res) {
            return toast("Appointment booked ")
        }
        else {
            return toast.error("Unsuccessfull")
        }
    }


    return (
        <div className="appointment-container">
            <form className="appointment-form" method='POST'>
                <h2>Book an Appointment</h2>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        autoComplete='off'
                        value={AppointmentData.fullName}
                        onChange={data} required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete='off'
                        value={AppointmentData.email}
                        onChange={data} required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete='off'
                        value={AppointmentData.phone}
                        onChange={data} required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="preferredDateTime">Preferred Date and Time:</label>
                    <input
                        type="datetime-local"
                        id="preferredDateTime"
                        name="preferredDateTime"
                        autoComplete='off'
                        value={AppointmentData.preferredDateTime}
                        onChange={data} required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="doctor">Doctor/Specialist:</label>
                    <select id="doctor" name="doctor" autoComplete='off' value={AppointmentData.doctor} onChange={data} required
                    >
                        <option value="">Select Doctor</option>
                        {doctors.map((doctor) => (
                            <option key={doctor.value} value={doctor.value}>
                                {doctor.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="reason">Reason for Appointment:</label>
                    <textarea
                        id="reason"
                        name="reason"
                        autoComplete='off'
                        value={AppointmentData.reason}
                        onChange={data} required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="insurance">Insurance Information:</label>
                    <input
                        type="text"
                        id="insurance"
                        name="insurance"
                        autoComplete='off'
                        value={AppointmentData.insurance}
                        onChange={data}
                    />
                </div>
                <div className="input-checkbox-label">
                    <input
                        type="checkbox"
                        id="confirmation"
                        name="confirmation"
                        autoComplete='off'
                        checked={AppointmentData.confirmation}
                        onChange={data}
                        required

                    />
                    <label htmlFor="confirmation">I confirm my appointment booking and agree to the terms and conditions.</label>
                </div>
                <button type="submit" onClick={SubmitData}>Submit</button>
            </form>
        </div>

    )
}

export default Appointment
