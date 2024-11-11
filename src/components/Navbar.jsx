import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center mt-6">
      <div className="w-3/5 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span id="monsterrat" className="text-lg font-bold"><a href="#">Portfolio</a></span>
        </div>
        <div className="space-x-2.5">
          <a id="navitem" href="#projects" className="p-5 py-3 hover:bg-blue-100 active:bg-blue-500">PROJECTS</a>
          <a id="navitem" href="#about" className="p-5 py-3 hover:bg-blue-100 active:bg-blue-500">ABOUT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;