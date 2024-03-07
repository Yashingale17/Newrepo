import React from 'react'
import './Departmant.css'

const Departmentpage = () => {
    return (
        <div className="department-page">
      <h2 className="department-page__title">Departments</h2>
      <div className="department-section">
        <h3 className="department-section__title">Medical Departments</h3>
        <p className="department-section__description">Comprehensive medical care for various conditions and emergencies.</p>
        <ul className="department-section__list">
          <li>Emergency Medicine - Immediate medical care for emergencies</li>
          <li>Cardiology - Diagnosis and treatment of heart diseases</li>
          <li>Orthopedics - Care for musculoskeletal injuries and disorders</li>
          <li>Neurology - Evaluation and management of neurological disorders</li>
          <li>Pediatrics - Healthcare for infants, children, and adolescents</li>
          <li>Obstetrics and Gynecology - Women's health and maternity care</li>
          <li>Psychiatry - Mental health assessment and treatment</li>
          <li>Radiology - Diagnostic imaging services</li>
          <li>Oncology - Cancer diagnosis and treatment</li>
          <li>Surgery - Surgical procedures for various medical conditions</li>
          <li>Physical Therapy - Rehabilitation and therapy for injuries</li>
        </ul>
      </div>
      <div className="department-section">
        <h3 className="department-section__title">Specialty Services</h3>
        <p className="department-section__description">Specialized care for specific health conditions and diseases.</p>
        <ul className="department-section__list">
          <li>Cancer Center - Comprehensive care for cancer patients</li>
          <li>Heart Center - Cardiac care and treatment</li>
          <li>Women's Health - Services tailored for women's health needs</li>
          <li>Children's Hospital - Pediatric healthcare services</li>
          <li>Rehabilitation Center - Rehabilitation and therapy services</li>
        </ul>
      </div>
      <div className="department-section">
        <h3 className="department-section__title">Support Services</h3>
        <p className="department-section__description">Supportive services to enhance patient care and experience.</p>
        <ul className="department-section__list">
          <li>Laboratory - Diagnostic testing and analysis</li>
          <li>Pharmacy - Prescription dispensing and medication management</li>
          <li>Imaging - Medical imaging and radiology services</li>
          <li>Nutrition Services - Dietary assessment and counseling</li>
          <li>Social Services - Support and assistance for social and emotional needs</li>
        </ul>
      </div>
      <div className="department-section">
        <h3 className="department-section__title">Additional Resources</h3>
        <p className="department-section__description">Extra resources and services to support patient care and information.</p>
        <ul className="department-section__list">
          <li>Patient Education - Educational resources for patients and families</li>
          <li>Billing and Insurance - Assistance with billing and insurance inquiries</li>
          <li>Medical Records - Access to personal medical records and information</li>
          <li>Careers - Employment opportunities and job listings</li>
          <li>Volunteer Opportunities - Opportunities for community service and volunteerism</li>
        </ul>
      </div>
    </div>
    )
}

export default Departmentpage
