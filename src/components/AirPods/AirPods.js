import React from "react";
import "./AirPods.css";

const AirPods = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">AirPods</h1>
      <p className="page-description">
        Effortless listening with superb sound.
      </p>
      <div className="animated-box-container">
        <div className="animated-box box1"></div>
        <div className="animated-box box2"></div>
        <div className="animated-box box3"></div>
      </div>
    </div>
  );
};

export default AirPods;
