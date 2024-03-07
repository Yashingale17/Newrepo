import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const Layout = ({ Children }) => {
    return (
        <div>
            <Navbar/>
            <div className="content">
                {Children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
