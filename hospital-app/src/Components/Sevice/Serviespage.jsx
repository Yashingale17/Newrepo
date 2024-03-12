import React, { useState } from 'react'
import './servies.css'



const Serviespage = () => {
    return (
        <div className='Service-Container'>
            <div className="image-content">
                <div className='service-para'>
                    <div className='Service-title'>
                        <h2>Our Services</h2></div>
                    <div className='service-page-para'>
                        <div className="service-para-title">
                            Here to redefine patient care!
                        </div>

                        <div className="div-section-main">
                            <div className="service-main-para">
                                <strong> Hospital CareHub</strong> has passionately delivered extraordinary results time and again and has been the pioneer in providing unparalleled healthcare services to the society. Our aim has always been to provide world class services with zero compromise on quality and safety.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-img'></div>
            </div>

            <div className="report-billing-section">
                
            </div>

            <div className='Service-type-container'>
                <div className="service-type-contentbox1">
                    <div className="contentbox1-service1"></div>
                    <div className="contentbox1-service2"></div>
                    <div className="contentbox1-service3"></div>
                </div>
                <div className="service-type-contentbox2">
                    <div className="contentbox1-service4"></div>
                    <div className="contentbox1-service5"></div>
                    <div className="contentbox1-service6"></div>
                </div>
                <div className="service-type-contentbox3">
                    <div className="contentbox1-service7"></div>
                    <div className="contentbox1-service8"></div>
                    <div className="contentbox1-service9"></div>
                </div>
            </div>
        </div>
    )
}

export default Serviespage
