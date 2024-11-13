import React from "react";

const ProjectCard = ({ image, title, description, link, width }) => {
  return (
    <div className={`p-4 ${width} transform transition duration-300 hover:scale-105 hover:bg-blue-100 relative hover:z-10 active:bg-blue-400`}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:grayscale-0 transition duration-300">
        <img src={image} alt={description} className="w-full h-auto" />
        <h3 id="monsterrat" className="mt-2">{title}</h3>
        <p id="monsterrat" className="mt-2 italic opacity-80">{description}</p>
      </a>
    </div>
  );
};

export default ProjectCard;