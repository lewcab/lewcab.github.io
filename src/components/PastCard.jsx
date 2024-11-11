import React from "react";

const PastCard = ({ company, role, startDate, endDate, link }) => {
  return (
    <div className="m-2 p-4 bg-gray-200 border shadow-md transform transition duration-300 hover:scale-105 hover:bg-blue-100 relative hover:z-10">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:grayscale-0 transition duration-300">
        <h3 id="monsterrat" className="text-xl font-bold">{company}</h3>
        <p id="monsterrat" className="text-lg italic">{role}</p>
        <p id="monsterrat" className="text-sm text-gray-600">{startDate} - {endDate}</p>
      </a>
    </div>
  );
};

export default PastCard;