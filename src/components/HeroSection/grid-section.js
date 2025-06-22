import React from "react";
import "./grid-section.css";
import asset6 from "../../assets/images/heroimages/grid-section/asset6.jpg";
import asset7 from "../../assets/images/heroimages/grid-section/asset 7.jpg";
import asset9 from "../../assets/images/heroimages/grid-section/asset 9.jpeg";
import airpods from "../../assets/images/heroimages/grid-section/airpods.png";
import mac from "../../assets/images/heroimages/grid-section/promo_macbookpro_announce__gdf98j6tj2ie_small_2x.png";
import iphone from "../../assets/images/heroimages/grid-section/promo_iphone.jpg";
import card from "../../assets/images/heroimages/grid-section/promo_apple_card.jpg";
import tradein from "../../assets/images/heroimages/grid-section/tradein.png";
import cardlogo from "../../assets/images/heroimages/grid-section/logo__dcojfwkzna2q_large.png";

const GridSection = () => {
  return (
    <section className="grid-section">
      <div className="row full-box">
        <img src={asset6} alt="Main" className="box-image" />
        <div className="text">
          <h2>IPhone</h2>
          <p>Meet The Iphone 16 Family.</p>
          <div className="button">
            <button className="learn-btn">Learn More</button>
            <button className="buy-btn">Shop IPhone</button>
          </div>
        </div>
      </div>
      <div className="row split-row">
        <div className="half-box box1">
          <img src={asset7} alt="Box 1" className="split-image" />
          <div className="text">
            <h2>IPad Pro</h2>
            <p>Unbelieveable THin.Incredibly powefull</p>
            <div className="button">
              <button className="learn-btn">Learn More</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>
        </div>
        <div className="half-box">
          <img src={asset9} alt="Box 2" className="split-image" />
          <div className="text">
            <h2>Watch</h2>
            <p>Series 10</p>
            <p>Thinstant Classic.</p>
            <div className="button">
              <button className="learn-btn">Learn More</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row split-row">
        <div className="half-box">
          <img src={airpods} alt="Box 3" className="split-image" />
        </div>
        <div className="half-box box4">
          <img src={mac} alt="Box 4" className="split-image" />
          <div className="text">
            <h2>MacBok Pro</h2>
            <p>A Work of Smart.</p>
            <div className="button">
              <button className="learn-btn">Learn More</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row split-row">
        <div className="half-box">
          <img src={iphone} alt="Box 5" className="split-image" />
          <div className="text">
            <img src={tradein}></img>
            <p>
              Get $170-630 in your credit when you trade in 12 IPohoe 12 or
              higher version.<sup>3</sup>
            </p>
            <div className="button">
              <button className="learn-btn">Get your Estimate</button>
            </div>
          </div>
        </div>
        <div className="half-box">
          <img src={card} alt="Box 6" className="split-image" />
          <div className="text">
            <img src={cardlogo}></img>
            <p>Get upto 3% daily casback with every purchae</p>
            <div className="button">
              <button className="learn-btn">Learn More</button>
              <button className="buy-btn">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
