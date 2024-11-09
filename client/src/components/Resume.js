// src/components/Resume.js
import React from 'react';
import './Resume.css';
import { FaGraduationCap, FaBriefcase, FaCode, FaProjectDiagram } from 'react-icons/fa';

const Resume = () => {
  return (
    <div id="resume" className="resume-container">
      <div className="resume-header">
        <h1>Gargi Mittal</h1>
        <h2>Computer Science Engineering Student & Aspiring Developer</h2>
        <a 
          href="/My Resume (4).pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="download-button"
        >
          Download Full Resume
        </a>
      </div>

      <div className="resume-content">
        {/* Education Section */}
        <section className="resume-section">
          <h3><FaGraduationCap className="section-icon" /> Education</h3>
          <div className="resume-item">
            <h4>Bachelor of Technology in Computer Science Engineering</h4>
            <p>Symbiosis Institute of Technology, 08/2022 - 06/2026</p>
            <p>Pune, India</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="resume-section">
          <h3><FaProjectDiagram className="section-icon" /> Projects</h3>
          
          <div className="resume-item">
            <h4>InSync Connect</h4>
            <p><strong>Description:</strong> Built a comprehensive website for [NGO Name] to improve communication among staff, parents, volunteers, and administrators. This platform facilitates efficient information exchange, scheduling, and updates, helping the NGO streamline operations.</p>
            <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, Node.js, Express.js, Nodemailer (for automated email notifications), bcrypt (for secure data encryption)</p>
            
          </div>
          
          <div className="resume-item">
            <h4>Fuel Feast</h4>
            <p><strong>Description:</strong> Developed a MERN stack website for booking reservations, exploring menus, and placing orders with integrated payment options. This platform features a chatbot, powered by generative AI, to provide personalized fitness coaching and dietary advice.</p>
            <p><strong>Technologies Used:</strong> MERN Stack (MongoDB, Express.js, React.js, Node.js), Generative AI, Payment Gateway Integration, Nodemailer</p>
            
          </div>

          <div className="resume-item">
            <h4>Fake Profile Detection System</h4>
            <p><strong>Description:</strong> Built a fake profile detection website utilizing a KNN machine learning model. The system analyzes six key parameters to identify potential fake profiles.</p>
            <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, Python, KNN Model</p>
            
          </div>

          <div className="resume-item">
            <h4>EventifySIU</h4>
            <p><strong>Description:</strong> Created an event management application using Java and MySQL to streamline the organization of events within the university, making it easier to manage attendees, schedules, and resources.</p>
            <p><strong>Technologies Used:</strong> Java (Apache NetBeans), MySQL</p>
            
          </div>

          <div className="resume-item">
            <h4>First-Hand Dermatology Detector</h4>
            <p><strong>Description:</strong> Built a dermatology detection tool using Google’s Teachable Machine to help users identify common dermatological conditions based on visual inputs.</p>
            <p><strong>Technologies Used:</strong> Teachable Machine, HTML, CSS, JavaScript</p>
            
          </div>

          <div className="resume-item">
            <h4>RFID-Based Attendance System</h4>
            <p><strong>Description:</strong> Developed a secure and efficient RFID-based attendance tracking system using Arduino, which records attendance in real-time, reducing manual tracking efforts.</p>
            <p><strong>Technologies Used:</strong> Arduino, RFID, Database Integration for Centralized Logging</p>
            
          </div>
        </section>

        {/* Skills Section */}
        <section className="resume-section">
          <h3><FaCode className="section-icon" /> Skills</h3>
          <ul className="skills-list">
            <li>C++, Python, JavaScript</li>
            <li>HTML, CSS, MySQL, Prolog</li>
            <li>Data Analysis, Web Development</li>
            <li>Machine Learning (KNN, Teachable Machine)</li>
          </ul>
        </section>

        {/* Extracurricular Activities Section */}
        <section className="resume-section">
          <h3><FaBriefcase className="section-icon" /> Extracurricular Activities</h3>
          <div className="resume-item">
            <h4>Design and Decor Team, Brushes to Pixel</h4>
          </div>
          <div className="resume-item">
            <h4>Participant, Prota Sports Event</h4>
          </div>
          <div className="resume-item">
            <h4>Volunteer, Reverb College Fest & Techfest College Fest</h4>
          </div>
        </section>

        {/* Languages Section */}
        <section className="resume-section">
          <h3><FaProjectDiagram className="section-icon" /> Languages</h3>
          <ul className="languages-list">
            <li>English - Full Professional Proficiency</li>
            <li>Hindi - Full Professional Proficiency</li>
            <li>German - Elementary Proficiency</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
