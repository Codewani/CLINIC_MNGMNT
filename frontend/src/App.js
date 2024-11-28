import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import NavBar from './components/NavBar'
import CreatePatient from './components/CreatePatient';
import CreateWard from './components/CreateWard';
import ViewPatients from './components/ViewPatients';
import ViewWards from './components/ViewWards';
import Home from './components/Home';
import service from './services/clinic'


const App = () => {
  const [wards, setWards] = useState([])
  const [patients, setPatients] = useState([])


  useEffect(() => {
    console.log('effect')
    let wards = service.getAll('wards').then(initalState => {
        console.log('promise fulfilled')
        setWards(initalState)
      })
    let patients = service.getAll('patients').then(initalState => {
        console.log('promise fulfilled')
        setPatients(initalState)
      })
  }, [])
  
  return (
      <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          <Route path="/CreatePatient" element={<CreatePatient />} />
          <Route path="/CreateWard" element={<CreateWard />} />
          <Route path="/ViewPatients" element={<ViewPatients patients={patients}/>} />
          <Route path="/ViewWards" element={<ViewWards wards={wards}/>} />

          {/* AI Diagnostic route 
          <Route path="/Diagnostic" element={<Diagnostic />} />

          {/* Enter Records routes 

          {/* View Records routes * */}

          {/* Other routes 
          
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logoutz" element={<Logout />} />
          */}

          {/* 404 route - must be last 
          <Route path="*" element={<NotFound />} />
          */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
