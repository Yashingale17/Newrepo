import React, { useState } from 'react'
import toast from 'react-hot-toast';
import './bookbed.css'
import 'react-datepicker/dist/react-datepicker.css';

const Bookbedpage = () => {
   const roomTypes = [
    { id: 1, name: 'Semi-Private', description: 'Comfortable room with two beds.' },
    { id: 2, name: 'Private', description: 'Spacious room with one bed and a private bathroom.' },
    { id: 3, name: 'ICU', description: 'Intensive care unit for critical patients.' },
    { id: 4, name: 'Single Occupancy', description: 'Standard room with one bed.' },
    { id: 5, name: 'Double Occupancy', description: 'Room with two beds for shared occupancy.' },
    { id: 6, name: 'Suite', description: 'Luxurious room with a separate living area.' },
    { id: 7, name: 'Accessible Room', description: 'Room designed for guests with disabilities.' },
    { id: 8, name: 'Isolation Room', description: 'Room for patients with infectious diseases.' },
    { id: 9, name: 'Maternal Care Room', description: 'Room designed for mothers and newborns.' },
    { id: 10, name: 'Pediatric Room', description: 'Room specially equipped for children.' },
  ];

  const [bookBed , SetBookbed] = useState (
    {
      PatientName:"",
      ContactNumber:"",
      InsuranceInformation:"",
      ChoosenRoom:"",
      AdmitDate:"",
      Discharge:""
    })

    let name, value 
    console.log(bookBed)
    const data = (e) => 
    {
      name = e.target.name;
      value = e.target.value;
      SetBookbed({...bookBed,[name]: value})
    }

    const SendDetails = async (e) => {
      const {PatientName, ContactNumber, InsuranceInformation, ChoosenRoom, AdmitDate, Discharge} = bookBed;
      e.preventDefault();
      const emptyFields = [];
        for (const key in bookBed) {
            if (!bookBed[key]) {
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
            PatientName, ContactNumber, InsuranceInformation, ChoosenRoom, AdmitDate, Discharge
          })
        }
        const res = await fetch('https://hospital-50195-default-rtdb.firebaseio.com/BedAvailablity.json',
        options
        )
        console.log(res)
        if (res) {
          return toast("Requested Submited for booking")
        }
        else {
          return toast("Unsuccessfull")
        }
    }


  return (
    <div className='booking-form'>
      <div className='schedule-form-container-main'>
        <div className="bed-form-container">
          <form className='Schadule-form' method='POST'>
            <h1>Schedule A Stay</h1>
            <div className="stay name">
              <label For="name">Patient Name:</label>
              <input 
              type="text" 
              placeholder='patient Name' 
              id='PatientName'
              name='PatientName'
              value={bookBed.PatientName}
              onChange={data}
              required />
            </div>
            <div className="contact">
              <label For="name">Contact Number</label>
              <input 
              type="text" 
              placeholder='Contact'
              id='ContactNumber'
              name='ContactNumber'
              value={bookBed.ContactNumber}
              onChange={data} 
              required />
            </div>
            <div className='insurance-book'>
              <label for="insurance">Insurance Information</label>
              <input 
              type="text" 
              id="InsuranceInformation" 
              name="InsuranceInformation" 
              value={bookBed.InsuranceInformation}
              onChange={data} 
              placeholder="Insurance Information (optional)" 
              required />
            </div>
            <div className="form-field-select">
              <label for="room-type">Choose Your Room Type:</label>
              <select 
              id="ChoosenRoom" 
              name="ChoosenRoom" 
              value={bookBed.ChoosenRoom}
              onChange={data}
              required>
                {roomTypes.map((roomType) => (
                  <option key={roomType.id} value={roomType.id}>
                    {roomType.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label for="arrival-date">Arrival Date:</label>
              <input 
              type="date" 
              id="AdmitDate" 
              name="AdmitDate"
              value={bookBed.AdmitDate}
              onChange={data} 
              required />
            </div>
            <div className="form-field">
              <label for="departure-date">Departure Date:</label>
              <input 
              type="date" 
              id="Discharge" 
              name="Discharge" 
              value={bookBed.Discharge}
              onChange={data}
              required />
            </div>
            <button type="submit" onClick={SendDetails}>Book Now</button>

          </form>
        </div>
      </div>
    </div>

  )
}

export default Bookbedpage
