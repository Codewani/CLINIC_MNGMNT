import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import NavBar from './components/NavBar'
import CreatePatient from './components/CreatePatient';
import CreateWard from './components/CreateWard';
import ViewPatients from './components/ViewPatients';
import ViewWards from './components/ViewWards';
import Home from './components/Home';
import AiRetrieval from './components/AiRetrieval'
import service from './services/clinic'


const App = () => {
  const [wards, setWards] = useState([])
  const [patients, setPatients] = useState([])


  useEffect(() => {
    console.log('effect')
    service.getAll('wards').then(initalState => {
        console.log('promise fulfilled')
        setWards(initalState)
      })
    service.getAll('patients').then(initalState => {
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
          <Route path="/CreatePatient" element={<CreatePatient patients={patients} wards={wards}/>} />
          <Route path="/CreateWard" element={<CreateWard />} />
          <Route path="/ViewPatients" element={<ViewPatients patients={patients}/>} />
          <Route path="/ViewWards" element={<ViewWards wards={wards}/>} />
          <Route path="/AiRetrieval" element={<AiRetrieval />} />
          {/* AI Diagnostic route 

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
