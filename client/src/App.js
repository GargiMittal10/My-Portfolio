// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile'; // Import Profile component
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Home />
        <Profile /> {/* Add Profile section here */}
        <Projects projects={projects} />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </div>
  );
};

export default App;
