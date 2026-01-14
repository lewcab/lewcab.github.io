import React from 'react';
import './About.css';

const About = () => {

  return (
    <>
      <p className="about">
        I'm a new-grad software developer based in <span className="glow-blue">British Columbia</span>.
        I have 16 months of professional experience building <span className="glow-red">full-stack</span> applications and <span className="glow-green">internal tools</span>.
        During this time, I primarily developed in <span className="glow-yellow">JavaScript</span>, <span className="glow-yellow">PHP</span>, <span className="glow-yellow">Python</span>, <span className="glow-yellow">TypeScript</span>, and <span className="glow-yellow">Java</span>.
      </p>
      <p className="about">
        Outside of work, I am learning about <span className="glow-red">game development</span> and <span className="glow-green">machine learning</span> by building small projects in <span className="glow-yellow">Unity</span> and <span className="glow-yellow">C#</span>.
        I also enjoy indoor bouldering, playing the guitar, and working on other projects like building and modifying keyboards.
      </p>
      <p className="about">
        If you would like to get in touch, feel free to reach out via email at <a href="mailto:lewcabal@gmail.com?" target="_blank" rel="noopener noreferrer" className="glow-green">lewcabal@gmail.com</a>.
      </p>
    </>
  );
};

export default About;
