import React from "react";
import "./HeroSection.css";
import asset6 from "../../assets/images/heroimages/macbook-air/hero_macbook_air_avail__fpm99qgohx2e_medium_2x.png";
import hero from "../../assets/images/heroimages/hero_bts_2025__kjxalx8t7ia2_medium_2x.jpg";
import hero1 from "../../assets/images/heroimages/hero_sticker_ipadair__bk6ffplndvte_large.png";
import hero2 from "../../assets/images/heroimages/hero_sticker_mba__b0ht7774wpaq_large.png";
import hero3 from "../../assets/images/heroimages/hero_sticker_genmoji__dixanrcsc2gm_large.png";
import SliderSection from "./SliderSection";
import SmoothCarouselSlider from "./SmoothCarouselSlider";
import Footer from "../Footer/Footer";
import GridSection from "./grid-section";

const HeroSection = () => {
  return (
    <>
      <section className="macbook">
        <div className="full-box">
          <img src={asset6} alt="Main" className="box-image" />
        </div>
        <div className="text">
          <h2>MacBook Air</h2>
          <p>Sky Blue Color</p>
          <p>Sky High Performance With M4.</p>
          <div className="button">
            <button className="learn-btn">Learn More</button>
            <button className="buy-btn">Buy</button>
          </div>
        </div>
      </section>
      <section className="hero-sections">
        <img src={hero} alt="Hero" className="hero-image" />

        <div class="bubble-column">
          <div class="box3 ">
            Buy Mac <br></br> Or Ipad <br></br> for College
          </div>
          <div class="box3 sb14">with educaton savings</div>
          <div class="box3 sb14">
            Choose AirPods Or an Eligible accessory<sup>1</sup>
          </div>
          <button className="shop-button">Shop</button>
        </div>

        <img src={hero2} alt="Hero" className="hero-image1" />
        <img src={hero1} alt="Hero" className="hero-image2" />
        <img src={hero3} alt="Hero" className="hero-image3" />
      </section>
      <GridSection />

      <SliderSection />
      <SmoothCarouselSlider />
      <Footer />
    </>
  );
};

export default HeroSection;
