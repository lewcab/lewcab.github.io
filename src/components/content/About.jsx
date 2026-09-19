import './About.css';

const About = () => {

  const renderEventbase = () => {
    const eventbase = "Eventbase";
    return (
      <>
        {eventbase.split('').map((char, index) => (
          <a key={index} className={`glow-${index}`}>{char}</a>
        ))}
      </>
    );
  };

  return (
    <>
      <p className="about">
        I'm a Software Developer based in <a className="glow-green">Victoria</a>, <a className="glow-green">BC</a>.
        Most recently, I was a <a className="glow-red">Junior Backend Engineer</a> at <a href="https://www.eventbase.com/" target="_blank">{renderEventbase()}</a> building data transformation pipelines in <a className="glow-yellow">PHP</a> and integrating 3rd party services into the mobile app with <a className="glow-yellow">Python</a>.
        I also recently graduated from <a href="https://www.uvic.ca/" target="_blank" rel="noopener noreferrer" className="glow-blue">UVic</a> with a BSc in <a className="glow-green">Computer Science</a>, completing <a className="glow-blue">16 months of co-ops</a> building full-stack applications and internal tools.
      </p>
      <p className="about">
        My professional work has focused on development with <a className="glow-yellow">JavaScript</a>, <a className="glow-yellow">PHP</a>, <a className="glow-yellow">Python</a>, <a className="glow-yellow">TypeScript</a>, <a className="glow-yellow">Java</a>, and <a className="glow-yellow">SQL</a>.
        I also regularly used <a className="glow-yellow">Git</a>, <a className="glow-yellow">Jira</a>, <a className="glow-yellow">Docker</a>, and <a className="glow-yellow">Jenkins</a> to streamline collaboration and development processes.
      </p>
      <p className="about">
        Outside of work, I build small projects in <a className="glow-yellow">Unity</a>, <a className="glow-yellow">Python</a>, and <a className="glow-yellow">C++</a> to explore <a className="glow-red">game development</a> and <a className="glow-green">machine learning</a> concepts.
        I also enjoy indoor bouldering, playing the guitar, and working on other projects like building and modifying keyboards.
      </p>
      <p className="about">
        If you would like to get in touch, feel free to reach out via email at <a href="mailto:lewcabal@gmail.com?" target="_blank" rel="noopener noreferrer" className="glow-green">lewcabal@gmail.com</a> or check out my work on <a href="https://github.com/lewcab" target="_blank" rel="noopener noreferrer" className="glow-blue">GitHub</a> or <a href="https://lewcab.itch.io" target="_blank" rel="noopener noreferrer" className="glow-blue">itch.io</a>.
      </p>
    </>
  );
};

export default About;
