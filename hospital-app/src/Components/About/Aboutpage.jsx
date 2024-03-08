import React from 'react'
import './About.css'

const Aboutpage = () => {
    return (
        <div className='About-content'>
            <h1>About Hospital CareHub</h1>
            <div className='about-section'>
                <section className='Section-body'>
                    <div className='Aouut-theory'>
                        <p>
                            <strong className='title'>
                                Here to redefine patient care!
                            </strong>
                        </p>

                        <p>
                            Located at the bustling prime junction of Malad Circle in the Gokuldham suburb of Mumbai, <strong>Hospital CareHube</strong> has been synonymous to well-being for almost 70,000+ patients for the last 18 years.
                        </p>

                        <p>
                            Founded under the visionary leadership of <strong>Dr.Daniel Lee in 2005</strong> , Sujay Hospital is committed to deliver exemplary healthcare services to the society with quality care that goes beyond providing cure.
                        </p>

                        <p>
                            Accredited by NABH, this boutique multi-speciality hospital has 50 beds with 8 bedded ICU, well-equipped hospital rooms, state-of-the-art technologically advanced systems, certified & highly skilled medical staff and has the backing of over 100 specialist & super specialist consultants from various medical backgrounds.
                        </p>
                    </div>
                    <div className='image'></div>
                </section>
            </div>

            <div className="Mission-Vision">
                <div className='Mission'>
                    <div className="Mission-img"></div>
                    <div className='mission-para'>
                        <p><strong className='Mission-line'>Mission</strong></p>
                        <p className='Mission-line2'>
                            Enhance our presence on the global front through the medium of digitisation by reaching out with our clinical expertise / prowess that results in superior clinical services for the benefit and upliftment of the community.
                        </p>
                    </div>
                </div>
                <div className='Vision'>
                    <div className='vision-img'></div>
                    <div className='vision-para'>
                        <p><strong className='Mission-line'>Vision</strong></p>
                        <p className='Mission-line2'>
                            To revolutionize our service offerings with the help of the latest and finest advanced technologies; to thrive on serving mankind for exemplary clinical outcomes – nationally
                            & internationally.
                        </p>
                    </div>
                </div>
            </div>

            <p className='core-title'>Core Values</p>
            <div className="core-value-container">
                <div className="core-container">
                    <div className="value-contant">
                        <div className='value-name'><strong>Accountability</strong></div>
                        <div className='core-para'>Taking ownership of one's actions, synergy (teamwork), humanitarian attitude, holding each member of the institution accountable to making everyday a better one.</div>
                    </div>
                    <div className="value-contant">
                        <div className='value-name'><strong>Ethics</strong></div>
                        <div className='core-para'>Truthful, trustworthy conduct while providing unbiased and immaculate care at every step to maintain the comfort and trust among everyone.</div>
                    </div>
                    <div className="value-contant">
                        <div className='value-name'><strong>Patient First</strong></div>
                        <div className='core-para'>Patient first – approach is practiced at all levels, to ensure each patient feels at ease and gets the right care with a human touch.</div>
                    </div>
                    <div className="value-contant">
                        <div className='value-name'><strong>Enhancement</strong></div>
                        <div className='core-para'>System enhancement, state-of-the-art infrastructure, keeping abreast of all services, contributing to the quality of care provided.</div>
                    </div>
                    <div className="value-contant">
                        <div className='value-name'><strong>Integrity</strong></div>
                        <div className='core-para'>Always doing the right things at all times. Following the moral principles as laid down by the hospital at all times.</div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Aboutpage
