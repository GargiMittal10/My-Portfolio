// src/components/Skills.js
import React from 'react';
import './Skills.css';
import { FaJsSquare, FaPython, FaReact, FaNode,  FaCode, FaEnvelope } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiGit, SiVisualstudiocode, SiExpress, SiCplusplus, SiC , SiPandas, SiNumpy, SiLinux, SiNpm} from 'react-icons/si';
import { GiBrain, GiTeamIdea, GiTimeBomb, GiTalk, GiAbstract002, GiEyeOfHorus, GiEyeball, GiDeadEye } from 'react-icons/gi'; // Use GiMagnifyingGlass

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
       { name: 'Java', icon: <FaCode /> },       // Added Java
      { name: 'C++', icon: <SiCplusplus /> },   // Added C++
      { name: 'C', icon: <SiC /> },  
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Prolog', icon: <FaCode /> },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNode /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Pandas', icon: <SiPandas /> }, // Check if this icon is available
    { name: 'NumPy', icon: <SiNumpy /> },   // Check if this icon is available
    { name: 'Nodemailer', icon: <FaEnvelope /> } // Substitute icon if SiNodemailer is unavailable
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'GitHub', icon: <SiGit /> },
      { name: 'VS Code', icon: <SiVisualstudiocode /> },
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'NPM', icon: <SiNpm /> },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', icon: <GiBrain /> },
      { name: 'Team Collaboration', icon: <GiTeamIdea /> },
      { name: 'Time Management', icon: <GiTimeBomb /> },
      { name: 'Communication', icon: <GiTalk /> },
      { name: 'Adaptability', icon: <GiAbstract002/>},
      { name: 'Eye for Detail', icon: <GiDeadEye/>},
    ],
  },
];

const Skills = () => (
  <section id="skills" className="skills">
    <h2>Skills</h2>
    <div className="skills-container">
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category.category}</h3>
          <div className="skills-list">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
