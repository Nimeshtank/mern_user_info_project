import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element= {  <Home />} />
        <Route path='/about'  element= { <About />} />
        <Route path='/contact' element=   { <Contact />} />
        <Route path='/login' element=     { <LogIn />} />
        <Route path='/signup' element=  {  <SignUp />} />
      </Routes>
    </div>
  )
}
       
     
  




