import React, { useState } from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Lyrics from './components/Lyrics';

import { homePage } from './components/constants.js';

import './App.css';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(homePage);

  return (
    <div className="app">
      <Sidebar/>
      <Hero selectedItem={selectedItem} />
      <Nav selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <Content selectedItem={selectedItem} />
      <Lyrics/>
    </div>
  );
};

export default App;