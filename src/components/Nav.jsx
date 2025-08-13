import React from 'react';
import {pageInfo} from "./constants.js";

const Nav = ({ setSelectedItem }) => {
  const navItems = Object.keys(pageInfo);

  return (
    <nav className="nav">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => setSelectedItem(item)}
          className="nav-button"
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Nav;