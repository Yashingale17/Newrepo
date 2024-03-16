
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Link, Routes, Route, Form } from 'react-router-dom';
import Doctor from './Pages/Doctor';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Department from './Pages/Department';
import BookAppointment from './Pages/BookAppointment';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import Reportpage from './Pages/Reportpage';
import Signup from './Pages/Signup';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import BookBed from './Pages/BookBed';


function App() {

  const [userName , setUserName] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged(( user) => {
      if(user) {
        setUserName(user.displayName);
      }
      else (
        setUserName("")
      )
    })
  },[])


  return (
    <>
      <Navbar userName={userName}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Doctor' element={<Doctor/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Department' element={<Department/>}/>
        <Route path='/Reportpage' element={<Reportpage/>}/>
        <Route path='/BookAppointment' element={< BookAppointment/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/BookBed' element={<BookBed/>}/>
      </Routes>
      <Toaster/>
      <Footer/>
    </>
  );
}

export default App;