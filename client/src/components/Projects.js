// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'InSync Connect',
    description: 'Built a comprehensive website for Navskhitij to improve communication among staff, parents, volunteers, and administrators. This platform facilitates efficient information exchange, scheduling, and updates, helping the NGO streamline operations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Nodemailer', 'bcrypt']
  },
  {
    title: 'Fuel Feast',
    description: 'Developed a MERN stack website for booking reservations, exploring menus, and placing orders with integrated payment options. This platform features a chatbot, powered by generative AI, to provide personalized fitness coaching and dietary advice.',
    technologies: ['MERN Stack (MongoDB, Express.js, React.js, Node.js)', 'Generative AI', 'Payment Gateway Integration', 'Nodemailer']
  },
  {
    title: 'Fake Profile Detection System',
    description: 'Built a fake profile detection website utilizing a KNN machine learning model. The system analyzes six key parameters (favorite number, statuses count, followers count, friends count, favorites count, and listed count) to identify potential fake profiles.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'KNN Model']
  },
  {
    title: 'EventifySIU',
    description: 'Created an event management application using Java and MySQL to streamline the organization of events within the university, making it easier to manage attendees, schedules, and resources.',
    technologies: ['Java', 'MySQL']
  },
  {
    title: 'First-Hand Dermatology Detector',
    description: 'Built a dermatology detection tool using Google’s Teachable Machine to help users identify common dermatological conditions based on visual inputs.',
    technologies: ['Teachable Machine', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'RFID-Based Attendance System',
    description: 'Developed a secure and efficient RFID-based attendance tracking system using Arduino. This system records attendance in real-time, reducing manual tracking efforts and ensuring data accuracy.',
    technologies: ['Arduino', 'RFID', 'Database Integration for Centralized Logging']
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
