import React from 'react';
import { pageInfo } from './constants.js';
import './Nav.css';

const Nav = ({ selectedItem, setSelectedItem }) => {
  const navItems = Object.keys(pageInfo).map((key) => pageInfo[key].title);

  return (
    <div className="nav">
      {navItems.map((item) => (
        <a
          key={item.title}
          onClick={() => setSelectedItem(item)}
          className={`nav-item` + (item === selectedItem ? ' active' : '')}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Nav;