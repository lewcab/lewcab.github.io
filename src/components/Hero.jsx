import React from 'react';
import {pageInfo} from "./constants.js";
import './Hero.css';

const Hero = ({ selectedItem }) => {

  return (
    <div className="hero">
      <h1 className="hero-fn fx-blur">
        LEWIS
      </h1>
      <h1 className="hero-ln fx-blur">
        CABAL
      </h1>
      <h2 className="hero-university fx-blur">
        UVIC:2025
      </h2>
      <h2 className="hero-program fx-blur">
        COMPUTER SCIENCE
      </h2>
    </div>
  );
};

export default Hero;