import React from 'react';
import './Projects.css';

import rayTracerImage from '../../assets/raytracer.png';
import splitKeyboardImage from '../../assets/kb.jpg';
import predictorImage from '../../assets/lol.png';
import coraImage from '../../assets/cora.png';

const Projects = () => {
  const projects = [
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

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-row">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.name} className="project-image" />
          </a>
          <div className="project-details">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;