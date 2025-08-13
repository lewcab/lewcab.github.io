import React from 'react';
import {pageInfo} from "./constants.js";

const Hero = ({ selectedItem }) => {

  return (
    <div className="hero">
      <img src={pageInfo[selectedItem].image} alt={selectedItem} className="hero-image" />
    </div>
  );
};

export default Hero;