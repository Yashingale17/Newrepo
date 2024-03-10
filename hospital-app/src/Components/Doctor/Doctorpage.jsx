import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './doctor.css'

const Doctorpage = () => {

    const doctors = [
        { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist',Qualification:'MD, MBBS', experience: '10 years' },
        { id: 2, name: 'Dr. Jane Smith', specialty: 'Pediatrician',Qualification:'MD, DTCD', experience: '8 years' },
        { id: 3, name: 'Dr. David Johnson', specialty: 'Dermatologist',Qualification:'MD, FCCP (USA)', experience: '5 years' },
        { id: 4, name: 'Dr. Sarah Lee', specialty: 'Neurologist',Qualification:'MD, Another Qualification', experience: '12 years' },
        { id: 5, name: 'Dr. Michael Brown', specialty: 'Orthopedic Surgeon',Qualification:'MD, Some Qualification', experience: '7 years' },
        { id: 6, name: 'Dr. Emily Taylor', specialty: 'Gynecologist',Qualification:'MD, Yet Another Qualification', experience: '4 years' },
        { id: 7, name: 'Dr. Robert Wilson', specialty: 'Ophthalmologist',Qualification:'MD, Board Certified', experience: '9 years' },
        { id: 8, name: 'Dr. Laura Martinez', specialty: 'Endocrinologist',Qualification:'MD, Fellowship Trained', experience: '10 years' },
        { id: 9, name: 'Dr. William Adams', specialty: 'Gastroenterologist',Qualification:'MD, Specialized Training', experience: '3 years' },
        { id: 10, name: 'Dr. Samantha Evans', specialty: 'Psychiatrist',Qualification:'MD, Additional Certifications', experience: '8 years' },
        { id: 11, name: 'Dr. Daniel Lee', specialty: 'Urologist',Qualification:'MD, Specialized Experience', experience: '11 years' },
        { id: 12, name: 'Dr. Ashley Brown', specialty: 'Allergist',Qualification:'MD, Continued Education', experience: '6 years' },
        { id: 13, name: 'Dr. Christopher Wilson', specialty: 'Rheumatologist',Qualification:'MD, Research Experience', experience: '7 years' },
        { id: 14, name: 'Dr. Jessica Hernandez', specialty: 'Pulmonologist',Qualification:'MD, Award Recognitions', experience: '9 years' },
        { id: 15, name: 'Dr. Taylor Clark', specialty: 'Otolaryngologist',Qualification:'MD, Award Recognitions', experience: '4 years' },
    ];

    return (
        <div className="doctor-page">
            <h1>Our Doctors</h1>
            <div className="doctors">
                { doctors.map(doctor => (
                    <div className="doctor" key={doctor.id}>
                        <div className={`doctor-image doctor-image-${doctor.id}`}></div>
                        <div className="info">
                            <h2>{doctor.name}</h2>
                            <div className="details">
                                <p>Specialty: {doctor.specialty}</p>
                                <p>Experience: {doctor.experience}</p>
                                <p>Qualification:{doctor.Qualification}</p>
                                <Link to="/BookAppointment" className='Doctor-to-department'>Book Appointment</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Doctorpage
