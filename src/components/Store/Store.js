import React from "react";
import "./Store.css";

const Store = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">Welcome to the Store</h1>
      <p className="page-description">Explore all the latest Apple products.</p>
      <div className="animated-box-container">
        <div className="animated-box box1"></div>
        <div className="animated-box box2"></div>
        <div className="animated-box box3"></div>
      </div>
    </div>
  );
};

export default Store;
