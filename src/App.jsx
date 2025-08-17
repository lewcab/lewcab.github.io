import React, { useState } from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Content from './components/Content';

import { homePage } from './components/constants.js';

import './App.css';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(homePage);

  return (
    <div className="app">
      <Hero selectedItem={selectedItem} />
      <Nav selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <Content selectedItem={selectedItem} />
    </div>
  );
};

export default App;