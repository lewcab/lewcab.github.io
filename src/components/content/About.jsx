import React from 'react';
import './About.css';

const About = () => {

  return (
    <>
      <p className="about">
        I am currently studying <span className="glow-green">Computer Science</span> at the <span className="glow-blue">University of Victoria</span>, expecting to graduate in <span className="glow-red">December 2025</span>.
        In my free time I enjoy indoor bouldering, playing the guitar, and working on fun projects like building and modifying keyboards.
        I am always looking for new opportunities to learn and grow as a developer, and am greatly interested in projects involving machine learning, computer vision, and computer graphics.
      </p>
      <p className="about">
        If you would like to get in touch, feel free to reach out via email at <a href="mailto:lewcabal@gmail.com?" target="_blank" rel="noopener noreferrer" className="glow-green">lewcabal@gmail.com</a>.
      </p>
    </>
  );
};

export default About;