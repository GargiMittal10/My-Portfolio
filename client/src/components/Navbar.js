// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaSun, FaMoon, FaUser, FaHome, FaProjectDiagram, FaLaptopCode, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
        <li><a href="#profile" className={activeSection === 'profile' ? 'active' : ''}>Profile</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
        <li><a href="#resume" className={activeSection === 'resume' ? 'active' : ''}>Resume</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <button onClick={toggleDarkMode} className="toggle-button">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
