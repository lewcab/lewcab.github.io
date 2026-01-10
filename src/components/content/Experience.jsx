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
      company: "James Evans & Associates",
      position: "Jr. Software Developer (Co-op)",
      date: "Jan 2025 - Apr 2025",
      details: [
        "Maintained Java (Spring) endpoints/controllers, ensuring reliable data flow between service and application.",
        "Developed TypeScript (React) screens from design and functionality requirements, quickly adopting new features.",
        "Delivered production-ready and client-facing code, complying to security and accessibility standards.",
      ],
      link: "https://www.jea.ca/",
    },
    {
      company: "Invinity Energy Systems",
      position: "Software Engineer (Co-op)",
      date: "Jan 2024 - Apr 2024",
      details: [
        "Built automated Python tools, improving the interfacing and testing experience for next-gen products.",
        "Developed Python tools to control Keysight loggers, enabling automated and cloud-stored data.",
        "Worked closely with large-scale battery systems, adhering to strict safety protocols while developing and testing software.",
      ],
      link: "https://invinity.com/",
    },
    {
      company: "Bailey International",
      position: "Full-Stack Developer (Co-op)",
      date: "Jan 2023 - Aug 2023",
      details: [
        "Developed React applications to automate workflows, enabling visibility of production bottlenecks.",
        "Created dashboards to track and display metrics for performance and inventory monitoring.",
        "Presented technical solutions to both technical and non-technical stakeholders, gaining adoption.",
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
            <span className={`experience-title ${exp.color}`}>{exp.position}</span>
            <span className="experience-date">{exp.date}</span>
          </a>
          <div className="experience-sub">
            {exp.company}
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