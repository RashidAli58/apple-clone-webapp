import React from "react";
import "./Watch.css";

const Watch = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">Apple Watch</h1>
      <p className="page-description">Stay active, healthy, and connected.</p>
      <div className="animated-box-container">
        <div className="animated-box box1"></div>
        <div className="animated-box box2"></div>
        <div className="animated-box box3"></div>
      </div>
    </div>
  );
};

export default Watch;
