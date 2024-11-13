import React from "react";
import ProjectCard from "./ProjectCard";
import PastCard from "./PastCard";

import raytracer from "../assets/raytracer.png";
import wrc from "../assets/wrc.jpg";

const Content = () => {
  return (
    <section className="flex justify-center items-center my-16">
      <div className="w-3/5 flex flex-wrap justify-between">

        <h1 id="projects" className="w-full text-4xl mb-6 font-bold">Projects</h1>
        <ProjectCard
          image={raytracer}
          title="RAY TRACER"
          description="Python script which takes formatted .txt input and renders a still 3D scene containing spheres and light sources."
          link="https://github.com/lewcab/raytracer"
          width="w-3/5"
        />
        <ProjectCard
          image={wrc}
          title="EA SPORTS WRC RACER (WIP)"
          description="Machine Learning model to drive a car in EA SPORTS WRC using Python and scikit-learn."
          link="https://github.com/lewcab/rally_ml"
          width="w-2/5"
        />

        <div className="w-full mt-16">
          <h1 id="about" className="text-4xl mb-6 font-bold">About Me</h1>
          <p id="monsterrat">
            I am currently studying Computer Science at the University of Victoria, expecting to graduate in 2025. In my free time I enjoy indoor bouldering, playing the guitar, and working on fun projects like building/modifying keyboards. I am always looking for new opportunities to learn and grow as a developer, and am greatly interested in projects involving machine learning and computer vision.
          </p>
        </div>

        <div className="w-full mt-16 flex flex-wrap">
          <PastCard
            company="INVINITY ENERGY SYSTEMS"
            role="Software Engineering Co-op"
            startDate="Jan. 2024"
            endDate="Apr. 2024"
            link="https://invinity.com/"
          />
          <PastCard
            company="SURE GRIP CONTROLS"
            role="Full-Stack Developer"
            startDate="Jan. 2023"
            endDate="Aug. 2023"
            link="https://suregripcontrols.com/"
          />
        </div>

      </div>
    </section>
  );
};

export default Content;