import React from 'react'
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Personal from './Personal.js'
import './App.css';
import Navbar from './Navbar';
import {Routes, Route } from "react-router-dom";
import Work from './Work.js';
import Edu from "./Edu";
import Key from "./Key.js";
import KeySkills from "./KeySkills.js"
import Blah from './Blah.js'

import WorkExperience from "./We.js";
import PersonalInfo from './Nav.js';
import Education from "./Education.js";


function App() {
  
  return (
    <div>
     <Navbar/>
    
    <Routes>
      <Route path="ResumeBuilder" element={ <Home/> } />
      <Route path="My Resumes" element={ <About/> } />
      <Route path="/About Us" element={ <Contact/> } />
      <Route path="Personal" element ={<Personal/>}/>
      <Route path="Work" element ={<Work/>}/>
      <Route path="Edu" element ={<Edu/>}/>
      <Route path="Key" element ={<Key/>}/>
      <Route path="Education" element ={<Education/>}/>
      <Route path="Key Skills" element ={<KeySkills/>}/>
      <Route path="Work Experience" element ={<WorkExperience/>}/>
      <Route path="Personal Info" element ={<PersonalInfo/>}/>
      <Route path="Blah" element ={<Blah/>}/>
    </Routes>
  </div>
      
  );
}

export default App;
