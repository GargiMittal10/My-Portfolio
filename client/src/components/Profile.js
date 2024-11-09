// src/components/Profile.js
import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section id="profile" className="profile">
      <h2>Profile</h2>
      <div className="profile-content">
        <div className="profile-image">
          <img src="/gargi.jpg" alt="Your Name" />
        </div>
        <div className="profile-text">
          <p>
            Hi, I’m Gargi Mittal! I am a third-year Computer Science student at Symbiosis Institute of Technology,
            specializing in full-stack web development and machine learning. Driven by a commitment to problem-solving
            and innovation, I aim to apply my skills in impactful projects and learn from industry professionals.
          </p>
          <p>
            I have hands-on experience in web development using the MERN stack and a foundational understanding of
            machine learning. My goal is to secure a software development role where I can deepen my expertise and
            contribute meaningfully to dynamic teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
