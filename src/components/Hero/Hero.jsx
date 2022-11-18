import React from 'react';
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-add">
          <div></div>
          <span>The best Fitness club in the town.</span>
        </div>

        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text"> Shape </span>
            <span> Your </span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your Ideal
              body and live our life to fullest.
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} loading="lazy" alt="heart-img" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* Hero images */}
        <img src={hero_image} loading="lazy" alt="" className="hero-image" />
        <img src={hero_image_back} loading="lazy" alt="" className="hero-image-back" />

        {/* Calories */}
        <div className="calories">
          <img src={Calories} loading="lazy" alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Hero;