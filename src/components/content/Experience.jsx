import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      name: "James Evans & Associates",
      position: "Jr. Software Developer (Co-op)",
      date: "Jan. 2025 - Apr. 2025",
      link: "https://www.jea.ca/",
    },
    {
      name: "Invinity Energy Systems",
      position: "Software Engineering Co-op",
      date: "Jan. 2024 - Apr. 2024",
      link: "https://invinity.com/",
    },
    {
      name: "Sure Grip Controls",
      position: "Full-Stack Developer",
      date: "Jan. 2023 - Aug. 2023",
      link: "https://www.baileyintl.com/",
    },
  ];

  return (
    <div className="experience">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-row">
          <a
            className="experience-header"
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="experience-company">{exp.name}</span>
            <span className="experience-date">{exp.date}</span>
          </a>
          <div className="experience-details">
            {exp.position}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;