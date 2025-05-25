import React from 'react';
import githubIcon from '../assets/github-mark.svg';
import linkedinIcon from '../assets/linkedin.png';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center mt-6">
      <div className="w-3/5 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span id="monsterrat" className="text-lg font-bold mr-3"><a href="#">Portfolio</a></span>
          <a id="navitem" target="_blank" href="https://github.com/lewcab" className="p-3 py-3 hover:bg-blue-100 active:bg-blue-500">
            <img src={githubIcon} alt="GitHub" className="inline w-6 h-6"/>
          </a>
          <a id="navitem" target="_blank" href="https://www.linkedin.com/in/lewis-cabal/" className="p-3 py-3 hover:bg-blue-100 active:bg-blue-500">
              <img src={linkedinIcon} alt="LinkedIn" className="inline w-6 h-6"/>
          </a>
        </div>
        <div className="space-x-2.5">
          <a id="navitem" href="#projects" className="p-5 py-3 hover:bg-blue-100 active:bg-blue-500">PROJECTS</a>
          <a id="navitem" href="#about" className="p-5 py-3 hover:bg-blue-100 active:bg-blue-500">ABOUT</a>
          <a id="navitem" href="#experience" className="p-5 py-3 hover:bg-blue-100 active:bg-blue-500">EXPERIENCE</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;