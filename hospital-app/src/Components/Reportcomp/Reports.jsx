import React, { useState, useEffect } from 'react'
import './report.css'

const Reports = () => {

  const [patients, setPatients] = useState([
    { 
      id: 1,
      uniqueId: '123456',
      password: 'password1',
      name: 'John Doe', 
      age: 35, 
      gender: 'Male', 
      diagnosis: 'Fractured leg', 
      admittedDate: '2024-03-01',
      reports: [
        { 
          id: 1,
          date: '2024-03-05',
          diagnosis: 'Follow-up examination',
          treatmentPlan: 'Continuing with current treatment plan',
          medications: [],
          additionalNotes: 'No significant changes observed.'
        },
        { 
          id: 2,
          date: '2024-03-15',
          diagnosis: 'Physical therapy session',
          treatmentPlan: 'Regular physical therapy sessions',
          medications: [],
          additionalNotes: 'Patient responded well to therapy.'
        },
        // Add more reports as needed
      ]
    },
    { 
      id: 2,
      uniqueId: '654321',
      password: 'password2',
      name: 'Jane Smith', 
      age: 28, 
      gender: 'Female', 
      diagnosis: 'Pneumonia', 
      admittedDate: '2024-03-05',
      reports: [
        { 
          id: 1,
          date: '2024-03-08',
          diagnosis: 'Follow-up examination',
          treatmentPlan: 'Continuing with current treatment plan',
          medications: ['Antibiotic: Amoxicillin 500mg, 3 times a day', 'Inhaler: Albuterol, as needed'],
          additionalNotes: 'Improvement in symptoms noted.'
        },
        { 
          id: 2,
          date: '2024-03-18',
          diagnosis: 'X-ray examination',
          treatmentPlan: 'Radiological assessment of lung condition',
          medications: [],
          additionalNotes: 'Results awaited.'
        },
        // Add more reports as needed
      ]
    },
    { 
      id: 3,
      uniqueId: '789012',
      password: 'password3',
      name: 'Alice Johnson', 
      age: 42, 
      gender: 'Female', 
      diagnosis: 'Hypertension', 
      admittedDate: '2024-03-10',
      reports: [
        { 
          id: 1,
          date: '2024-03-12',
          diagnosis: 'Initial evaluation',
          treatmentPlan: 'Prescription of antihypertensive medication',
          medications: ['Medication: Lisinopril 10mg, once daily'],
          additionalNotes: 'Patient advised to monitor blood pressure regularly.'
        },
        { 
          id: 2,
          date: '2024-03-20',
          diagnosis: 'Follow-up visit',
          treatmentPlan: 'Adjustment of medication dosage',
          medications: ['Medication: Lisinopril 20mg, once daily'],
          additionalNotes: 'Blood pressure levels showing improvement.'
        },
        // Add more reports as needed
      ]
    },
    { 
      id: 4,
      uniqueId: '135790',
      password: 'password4',
      name: 'Michael Johnson', 
      age: 45, 
      gender: 'Male', 
      diagnosis: 'Diabetes', 
      admittedDate: '2024-03-15',
      reports: [
        { 
          id: 1,
          date: '2024-03-18',
          diagnosis: 'Initial evaluation',
          treatmentPlan: 'Prescription of insulin therapy',
          medications: ['Insulin: Regular insulin, 10 units before meals'],
          additionalNotes: 'Patient educated on blood sugar monitoring.'
        },
        { 
          id: 2,
          date: '2024-03-25',
          diagnosis: 'Follow-up visit',
          treatmentPlan: 'Monitoring blood sugar levels',
          medications: ['Insulin: Regular insulin, 10 units before meals'],
          additionalNotes: 'Blood sugar levels stable.'
        },
        // Add more reports as needed
      ]
    },
    { 
      id: 5,
      uniqueId: '246801',
      password: 'password5',
      name: 'Emily Davis', 
      age: 50, 
      gender: 'Female', 
      diagnosis: 'Arthritis', 
      admittedDate: '2024-03-20',
      reports: [
        { 
          id: 1,
          date: '2024-03-22',
          diagnosis: 'Initial evaluation',
          treatmentPlan: 'Prescription of pain management medication',
          medications: ['Medication: Naproxen 500mg, twice daily'],
          additionalNotes: 'Patient advised on joint mobility exercises.'
        },
        { 
          id: 2,
          date: '2024-03-30',
          diagnosis: 'Follow-up visit',
          treatmentPlan: 'Assessment of pain management',
          medications: ['Medication: Naproxen 500mg, twice daily'],
          additionalNotes: 'Patient reports reduced joint pain.'
        },
        // Add more reports as needed
      ]
    },
    // Add more patients as needed
  ]);

  const [uniqueId, setUniqueId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [patient, setPatient] = useState(null);

  const handleUniqueIdChange = (event) => {
    setUniqueId(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const patient = patients.find(patient => patient.uniqueId === uniqueId && patient.password === password);
    if (patient) {
      // Display patient's details
      setPatient(patient);
      setError('');
    } else {
      setPatient(null);
      setError('Invalid unique ID or password. Please try again.');
    }
  }

  const handleDownloadReport = (report) => {
    // Convert report data to CSV format
    const csvContent = "data:text/csv;charset=utf-8,"
      + Object.keys(report).join(',') + '\n'
      + Object.values(report).join(',');

    // Create a blob containing the report content
    const blob = new Blob([csvContent], { type: 'text/csv' });

    // Create a URL for the blob and trigger download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${report.date}_report.csv`);
    document.body.appendChild(link);
    link.click();
  }
  return (
    <div className="report-container">
      <div className="report-page">
      <h1>Patient Report Page</h1>
      {!patient ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="uniqueId">Unique ID:</label>
            <input 
              type="text" 
              id="uniqueId" 
              value={uniqueId} 
              onChange={handleUniqueIdChange} 
              required 
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={handlePasswordChange} 
              required 
            />
          </div>
          <button type="submit">Submit</button>
          {error && <p className="error">{error}</p>}
        </form>
      ) : (
        <div>
          <h2>Patient Details</h2>
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
          <h2 className='reeeee'>Reports</h2>
          {patient.reports.map(report => (
            <div key={report.id} className="report">
              <p><strong>Date:</strong> {report.date}</p>
              <p><strong>Diagnosis:</strong> {report.diagnosis}</p>
              <p><strong>Treatment Plan:</strong> {report.treatmentPlan}</p>
              <p><strong>Medications:</strong></p>
              <ul>
                {report.medications.map((medication, index) => (
                  <li key={index}>{medication}</li>
                ))}
              </ul>
              <p><strong>Additional Notes:</strong> {report.additionalNotes}</p>
              <button onClick={() => handleDownloadReport(report)}>Download Report</button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    
);
}



export default Reports
