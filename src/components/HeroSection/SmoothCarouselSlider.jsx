import React, { useRef, useEffect, useState } from "react";
import "./SmoothCarouselSlider.css";
import { FaPlay, FaPause } from "react-icons/fa";

const images = [
  {
    src: require("../../assets/images/heroimages/SliderCarousal/Music.png"),
    text: "Welcome to the Show",
    button: "Watch Now",
  },
  {
    src: require("../../assets/images/heroimages/SliderCarousal/tour.png"),
    text: "Listen the Beats",
    button: "Listen Now",
  },
  {
    src: require("../../assets/images/heroimages/SliderCarousal/fitness.png"),
    text: "New Arrivals Today",
    button: "Watch Now",
  },
  {
    src: require("../../assets/images/heroimages/SliderCarousal/Music.png"),
    text: "Top Trending",
    button: "Listen Now",
  },
  {
    src: require("../../assets/images/heroimages/SliderCarousal/balantro.png"),
    text: "Explore the World",
    button: "Watch Now",
  },
  {
    src: require("../../assets/images/heroimages/SliderCarousal/Music2.png"),
    text: "Daily Inspiration",
    button: "Listen Now",
  },
];
const SmoothCarouselSlider = () => {
  const sliderRef = useRef(null);
  const translateRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    if (!slider) return;

    let speed = 2;
    let translateX = 0;
    let animation;
    speed = hovered ? speed * 0.3 : speed;
    const step = () => {
      if (!paused) {
        translateRef.current -= speed;

        slider.style.transform = `translateX(${translateRef.current}px)`;

        if (Math.abs(translateRef.current) >= slider.scrollWidth / 2) {
          translateRef.current = 0;
        }
      }
      animation = requestAnimationFrame(step);
    };

    animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, [paused, hovered]);

  return (
    <div className="slider-wrapper">
      <div className="slider-viewport">
        <div
          className="slider-track"
          ref={sliderRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {[...images, ...images].map((img, index) => (
            <div className="slider-item" key={index}>
              <img src={img.src} alt={`slide-${index}`} className="slide-img" />
              <div className="slide-content">
                <p className="slide-text">{img.text}</p>
                <button className="watch-button">{img.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-controls">
        <button onClick={() => setPaused(!paused)}>
          {paused ? <FaPlay /> : <FaPause />}
        </button>
      </div>
    </div>
  );
};

export default SmoothCarouselSlider;
