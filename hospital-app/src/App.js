
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Doctor from './Pages/Doctor';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Department from './Pages/Department';
import BookAppointment from './Pages/BookAppointment';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Doctor' element={<Doctor/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Department' element={<Department/>}/>
        <Route path='/BookAppointment' element={< BookAppointment/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;