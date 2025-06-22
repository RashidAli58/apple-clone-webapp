import React, { useEffect, useState } from "react";
import "./SliderSection.css";

const images = [
  {
    src: require("../../assets/images/heroimages/SliderSection/asset14.jpeg"),
    text: "Introducing the Future",
    button: "Discover",
  },
  {
    src: require("../../assets/images/heroimages/SliderSection/asset17.jpeg"),
    text: "Unleash Your Power",
    button: "Watch Now",
  },
  {
    src: require("../../assets/images/heroimages/SliderSection/asset19.jpeg"),
    text: "Limitless Possibilities",
    button: "Learn More",
  },
  {
    src: require("../../assets/images/heroimages/SliderSection/asset23.jpeg"),
    text: "Immersive Experience",
    button: "Stream",
  },
  {
    src: require("../../assets/images/heroimages/SliderSection/asset21.jpeg"),
    text: "Unrivaled Performance",
    button: "Explore",
  },
  {
    src: require("../../assets/images/heroimages/SliderSection/asset25.jpeg"),
    text: "A New Dimension",
    button: "Try Now",
  },
  {
    src: require("../../assets/images/heroimages/SliderSection/asset27.jpeg"),
    text: "Sleek and Powerful",
    button: "Order Now",
  },
  {
    src: require("../../assets/images/heroimages/SliderSection/asset12.jpeg"),
    text: "Redefine Reality",
    button: "Get Started",
  },
  {
    src: require("../../assets/images/heroimages/SliderSection/asset29.jpeg"),
    text: "Welcome to Innovation",
    button: "Experience",
  },
  {
    src: require("../../assets/images/heroimages/SliderSection/asset31.jpeg"),
    text: "Technology Redefined",
    button: "Join Now",
  },
];

const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setAnimationKey(Date.now()); // force animation re-trigger
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAnimationKey(Date.now());
  };

  return (
    <section className="slider-section">
      <div className="slider-container">
        {/* Previous image preview */}
        <div
          className="slider-image preview-image left"
          onClick={() =>
            goToSlide((currentIndex - 1 + images.length) % images.length)
          }
        >
          <img
            src={images[(currentIndex - 1 + images.length) % images.length].src}
            alt="Previous"
          />
        </div>

        {/* Main image with animated overlay */}
        <div className="slider-image main-image">
          <img src={images[currentIndex].src} alt="Main" />
          <div className="image-overlay" key={animationKey}>
            <button className="slider-button">
              {images[currentIndex].button}
            </button>
            <p className="slider-text">{images[currentIndex].text}</p>
          </div>
        </div>

        {/* Next image preview */}
        <div
          className="slider-image preview-image right"
          onClick={() => goToSlide((currentIndex + 1) % images.length)}
        >
          <img
            src={images[(currentIndex + 1) % images.length].src}
            alt="Next"
          />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
