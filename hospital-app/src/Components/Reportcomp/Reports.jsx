import React, { useState, useEffect } from 'react'
import ReactPDF, { Document, Page, Text } from '@react-pdf/renderer'
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
          type: 'Follow-up',
          date: '2024-03-05',
          diagnosis: 'Continuing treatment for fractured leg',
          treatmentPlan: 'Physical therapy sessions',
          medications: ['Painkillers: Ibuprofen 400mg, 3 times a day'],
          additionalNotes: 'Patient showed improvement in mobility.',
          recipientName: 'Dr. Smith',
          recipientRole: 'Orthopedic Surgeon'
        },
        {
          id: 2,
          type: 'Physical Therapy',
          date: '2024-03-15',
          diagnosis: 'Physical therapy session',
          treatmentPlan: 'Regular physical therapy sessions',
          medications: [],
          additionalNotes: 'Patient responded well to therapy.',
          recipientName: 'Dr. Johnson',
          recipientRole: 'Physiotherapist'
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
          type: 'Follow-up',
          date: '2024-03-08',
          diagnosis: 'Continuing treatment for pneumonia',
          treatmentPlan: 'Antibiotics and rest',
          medications: ['Antibiotic: Amoxicillin 500mg, 3 times a day'],
          additionalNotes: 'Improvement in symptoms noted.',
          recipientName: 'Dr. Patel',
          recipientRole: 'Pulmonologist'
        },
        {
          id: 2,
          type: 'X-ray Examination',
          date: '2024-03-18',
          diagnosis: 'Radiological assessment of lung condition',
          treatmentPlan: 'Awaiting results',
          medications: [],
          additionalNotes: 'Results awaited.',
          recipientName: 'Dr. Lee',
          recipientRole: 'Radiologist'
        },
        // Add more reports as needed
      ]
    },
    // Add more patient data as needed
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
    const foundPatient = patients.find(patient => patient.uniqueId === uniqueId && patient.password === password);
    if (foundPatient) {
      setPatient(foundPatient);
      setError('');
    } else {
      setPatient(null);
      setError('Invalid unique ID or password. Please try again.');
    }
  }

  const handleDownloadReport = async (report) => {
    // Create a PDF document with detailed report information
    const ReportDocument = (
      <Document>
        <Page>
          <Text>Report Type: {report.type}</Text>
          <Text>Report Date: {report.date}</Text>
          <Text>Diagnosis: {report.diagnosis}</Text>
          <Text>Treatment Plan: {report.treatmentPlan}</Text>
          <Text>Medications: {report.medications.join(', ')}</Text>
          <Text>Additional Notes: {report.additionalNotes}</Text>
          <Text>Recipient Name: {report.recipientName}</Text>
          <Text>Recipient Role: {report.recipientRole}</Text>
        </Page>
      </Document>
    );
  
    // Render the document
    const pdfInstance = ReactPDF.render(ReportDocument);
  
    // Generate PDF blob
    const blob = await pdfInstance.toBlob();
  
    // Create a URL for the blob and trigger download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${report.date}_report.pdf`);
    document.body.appendChild(link);
    link.click();
  }
  return (
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
          <h2>Reports</h2>
          {patient.reports.map(report => (
            <div key={report.id} className="report">
              <p><strong>Report Type:</strong> {report.type}</p>
              <button onClick={() => handleDownloadReport(report)}>Download Report</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const styles = {
  header: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subHeader: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold'
  }
};


export default Reports
