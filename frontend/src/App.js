import React, { createContext, useReducer } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Logout from './Components/Logout';
import { Route, Routes } from 'react-router-dom';
// import ErrorPage from './Components/ErrorPage'; 
import {initialState, reducer} from "../src/Reducers/useReducer";

export const UserContext = createContext();

const Routing=()=>{
  return(
    <Routes>
    <Route  path='/' element= {  <Home />} />
    <Route  path='/about'  element={ <About />} />
    <Route  path='/contact' element={ <Contact />} />
    <Route  path='/login' element={ <LogIn />} />
    <Route  path='/signup' element={  <SignUp />} />
    <Route  path='/logout' element={<Logout />} />
    {/* <Route  element={<ErrorPage />} /> */}  
  </Routes>
  )
}

export default function App() {

   const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    
    <Navbar />
    <Routing  />

    </UserContext.Provider>
     
    </>
  )
}
       
     
  





