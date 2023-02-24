import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Core/Home/Home'
import Navbar from './Core/Nav/Navbar'

import React from 'react'

function App() {
  return (
    <div>
       <Router>
          
          <Navbar /> 
        
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>

        </Router>
    </div>
  );
}

export default App;
