import React from "react";
import "./Accessories.css";

const Accessories = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">Accessories</h1>
      <p className="page-description">
        Gear up with the latest Apple accessories.
      </p>
      <div className="animated-box-container">
        <div className="animated-box box1"></div>
        <div className="animated-box box2"></div>
        <div className="animated-box box3"></div>
      </div>
    </div>
  );
};

export default Accessories;
