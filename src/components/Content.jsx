import React from 'react';
import {pageInfo} from "./constants.js";

const Content = ({ selectedItem }) => {

  return (
    <div className="content">
      <p>{pageInfo[selectedItem].content}</p>
    </div>
  );
};

export default Content;