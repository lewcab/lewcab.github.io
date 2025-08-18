import React from 'react';
import './Sidebar.css';

import githubIcon from '../assets/github-mark.svg';
import linkedinIcon from '../assets/linkedin.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebar-image"
        src={githubIcon}
        alt="GitHub"
        onClick={() => window.open('https://github.com/lewcab')}
      />
      <img
        className="sidebar-image"
        src={linkedinIcon}
        alt="LinkedIn"
        onClick={() => window.open('https://www.linkedin.com/in/lewis-cabal-')}
      />
    </div>
  );
};

export default Sidebar;