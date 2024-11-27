import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NavBar from './components/NavBar';

// Import your pages/components
// import Diagnostic from './components/Diagnostic';
import CreatePatient from './components/CreatePatient';
import CreateWard from './components/CreateWard';
import ViewPatients from './components/ViewPatients';
import ViewWards from './components/ViewWards';
//import About from '.components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<App />} />
        <Route path="/CreatePatient" element={<CreatePatient />} />
        <Route path="/CreateWard" element={<CreateWard />} />
        <Route path="/ViewPatients" element={<ViewPatients />} />
        <Route path="/ViewWards" element={<ViewWards />} />

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
