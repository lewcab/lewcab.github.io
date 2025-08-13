import React, { useState } from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Content from './components/Content';

import './App.css';

const App = () => {
  const [selectedItem, setSelectedItem] = useState('Home');

  return (
    <div className="mx-auto px-4 sm:w-3/5 lg:max-w-screen-xl lg:max-w-[1675px]">
      <Hero selectedItem={selectedItem} />
      <Nav setSelectedItem={setSelectedItem} />
      <Content selectedItem={selectedItem} />
    </div>
  );
};

export default App;