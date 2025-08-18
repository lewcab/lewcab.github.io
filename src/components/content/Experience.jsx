import React from 'react';
import './Experience.css';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const Experience = () => {
  const colors = shuffleArray(['glow-red', 'glow-green', 'glow-blue']);
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

  experiences.forEach((exp, index) => {
    exp.color = colors[index % colors.length];
  });

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
            <span className={`experience-company ${exp.color}`}>{exp.name}</span>
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