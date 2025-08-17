import React from 'react';
import {pageInfo} from "./constants.js";
import './Content.css';

const Content = ({ selectedItem }) => {
  const ContentComponent = pageInfo[selectedItem].content;

  return (
    <div className="content">
      <ContentComponent/>
    </div>
  );
};

export default Content;