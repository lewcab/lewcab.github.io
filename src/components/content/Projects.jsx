import React from 'react';
import './Projects.css';

import rayTracerImage from '../../assets/raytracer.png';
import splitKeyboardImage from '../../assets/kb.jpg';
import predictorImage from '../../assets/lol.png';
import coraImage from '../../assets/cora.png';
import ddrImage from '../../assets/ddr.png';
import bitshoxImage from '../../assets/bitshox.png';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const Projects = () => {
  const colors = shuffleArray(['glow-red', 'glow-green', 'glow-blue']);
  const projects = [
    {
      name: "Bit Shox",
      description: "A physically realistic and widely customizable vehicle simulation package for Unity. Create vehicles from sports cars, family haulers, and trucks!",
      link: "https://github.com/lewcab/bit-shox",
      image: bitshoxImage,
    },
    {
      name: "Don't Die Revolution",
      description: "A unique spin on the turn-based combat genre, taking place in a high-fantasy setting. Taking mechanics from rhythm games, perfect your timing to strike your foes down!",
      link: "https://github.com/Theodore-CA/dont-die-revolution/releases/tag/v0.1.0",
      image: ddrImage,
    },
    {
      name: "League of Legends Predictor",
      description: "A collection of machine learning models with the goal of predicting the outcome of League of Legends professional matches. The Genetic algorithm was used to tune the model.",
      link: "https://github.com/lewcab/skill-issue",
      image: predictorImage,
    },
    {
      name: "A-Law Compression & Decompression",
      description: "A C program optimized for embedded systems to compress and decompress audio files.",
      link: "https://github.com/lewcab/a-law",
      image: coraImage,
    },
    {
      name: "3D Ray Tracer",
      description: "A Python program that renders a ray-traced image from a text description of a scene.",
      link: "https://github.com/lewcab/raytracer",
      image: rayTracerImage,
    },
    {
      name: "Split Keyboard",
      description: "Quick project of a modular case for a Sofle V1 split keyboard to learn Computer-Aided Design in SolidWorks.",
      link: "https://github.com/lewcab/sofle-v1-case",
      image: splitKeyboardImage,
    },
  ];

  projects.forEach((project, index) => {
  project.color = colors[index % colors.length];
  });

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-row">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.name} className="project-image" />
          </a>
          <div className="project-details">
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <h3 className={`project-title ${project.color}`}>{project.name}</h3>
            </a>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;