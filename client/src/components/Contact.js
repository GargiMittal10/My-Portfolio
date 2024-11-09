// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:gargimittal.10102003@gmail.com">gargimittal.10102003@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>6395711779</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Pune, India</span>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/gargi-mittal-b69065275/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/GargiMittal10" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Gargi Mittal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Contact;
