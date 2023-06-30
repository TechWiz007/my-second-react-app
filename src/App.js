import './App.css';
import About from './About';
import Portfolio from './Portfolio';
import Calc from './Calc';
import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

 
function App() {
  return (
    <>
      <Routes>
        <Route path="/About.js" element={<About />} />
        <Route path="/Portfolio.js" element={<Portfolio />} />
        <Route path="/Calc.js" element={<Calc />} />
      </Routes>
    </>
  );
}

export default App;
