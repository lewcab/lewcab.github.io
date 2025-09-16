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
      position: "Jr. Software Developer Co-op",
      date: "Jan. 2025 - Apr. 2025",
      details: [
        "Developed client-facing screens based on design and functionality requirements, adopting new features.",
        "Maintained Java Spring endpoints/controllers, ensuring reliable data flow between services.",
        "Delivered production-ready code, reducing vulnerabilities and ensuring compliance with policies.",
      ],
      link: "https://www.jea.ca/",
    },
    {
      name: "Invinity Energy Systems",
      position: "Software Engineering Co-op",
      date: "Jan. 2024 - Apr. 2024",
      details: [
        "Built automated Python tools, improving the interfacing and testing experience for next-gen products.",
        "Developed Python tools to control Keysight loggers, enabling automated and cloud-stored data.",
      ],
      link: "https://invinity.com/",
    },
    {
      name: "Sure Grip Controls",
      position: "Full-Stack Developer Co-op",
      date: "Jan. 2023 - Aug. 2023",
      details: [
        "Developed React applications to automate workflows, enabling visibility of production bottlenecks.",
        "Created dashboards to track and display metrics for performance and inventory monitoring.",
        "Presented technical solutions to both technical and non-technical stakeholders, gaining adoption and feedback.",
      ],
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
          <div className="experience-position">
            {exp.position}
          </div>
          <ul>
            {exp.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="experience-details" >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;