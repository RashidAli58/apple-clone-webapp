import React from "react";
import "./TVHome.css";

const TVHome = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">TV & Home</h1>
      <p className="page-description">Enjoy your content anytime, anywhere.</p>
      <div className="animated-box-container">
        <div className="animated-box box1"></div>
        <div className="animated-box box2"></div>
        <div className="animated-box box3"></div>
      </div>
    </div>
  );
};

export default TVHome;
