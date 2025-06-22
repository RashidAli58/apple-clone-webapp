import React from "react";
import "./Entertainment.css";

const Entertainment = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">Entertainment</h1>
      <p className="page-description">Music, movies, and more on demand.</p>
      <div className="animated-box-container">
        <div className="animated-box box1"></div>
        <div className="animated-box box2"></div>
        <div className="animated-box box3"></div>
      </div>
    </div>
  );
};

export default Entertainment;
