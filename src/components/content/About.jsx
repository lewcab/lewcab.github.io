import './About.css';

const About = () => {

  const renderEventbase = () => {
    const eventbase = "Eventbase";
    return (
      <>
        {eventbase.split('').map((char, index) => (
          <span key={index} className={`glow-${index}`}>{char}</span>
        ))}
      </>
    );
  };

  return (
    <>
      <p className="about">
        I'm a <span className="glow-red">Junior Backend Engineer</span> at <a href="https://www.eventbase.com/" target="_blank">{renderEventbase()}</a> based in <span className="glow-green">Victoria</span>, <span className="glow-green">BC</span>.
        I recently graduated from <a href="https://www.uvic.ca/" className="glow-blue">UVic</a> with a BSc in <span className="glow-green">Computer Science</span>, where I completed 16 months of co-op experience building <span className="glow-red">full-stack</span> applications and <span className="glow-green">internal tools</span>.
      </p>
      <p className="about">
        My work has primarily focused on development in <span className="glow-yellow">JavaScript</span>, <span className="glow-yellow">PHP</span>, <span className="glow-yellow">Python</span>, <span className="glow-yellow">TypeScript</span>, <span className="glow-yellow">Java</span>, and <span className="glow-yellow">SQL</span>.
        I also regularly used <span className="glow-yellow">Git</span>, <span className="glow-yellow">Jira</span>, <span className="glow-yellow">Docker</span>, and <span className="glow-yellow">Jenkins</span> to streamline collaboration and development processes.
      </p>
      <p className="about">
        Outside of work, I build small projects in <span className="glow-yellow">Unity</span>, <span className="glow-yellow">Python</span>, and <span className="glow-yellow">C++</span> to explore <span className="glow-red">game development</span> and <span className="glow-green">machine learning</span> concepts.
        I also enjoy indoor bouldering, playing the guitar, and working on other projects like building and modifying keyboards.
      </p>
      <p className="about">
        If you would like to get in touch, feel free to reach out via email at <a href="mailto:lewcabal@gmail.com?" target="_blank" rel="noopener noreferrer" className="glow-green">lewcabal@gmail.com</a>.
      </p>
    </>
  );
};

export default About;
