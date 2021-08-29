import React from "react";
import './landing.css';
import img1 from '../images/EstherDuflo.jpeg';
import img2 from '../images/gitanjali.jpeg';
import img3 from '../images/YulimarRojas.jpeg';


function Landing() {

  return (
    <div class="landing-area">
      {/* navigation bar */}
      <div class="navbar">
          <a href="meettheteam.html">Meet The Team </a>
          <a href="resources.html"> Resources </a>
          <a href="input.js"> Hype Me Up </a>
      </div>

    <div class="about-us-section">
      <div class="top-section">
        <div class="about-us">
          <h1> All The Hype </h1>
          <p class="intro-text"> 
          Our mission aims to give women a space to feel celebrated about their accomplishments, especially for those who feel they are often disregarded. Having experienced this feeling before and seeing the general trend among history, we looked to create a site that works to uplift women and help them be loud and proud about what they have achieved. 
          <br />
          <br />
          Scroll below to enter your name and accomplishment (written without personal pronouns), and answer a couple more prompted questions. Once you’ve entered your information, click the button “hype me up”, and we will take care of the rest!
          </p>
          <p class="inspiration">Our Inspiration:</p>
        </div>
        <div class="graphic-section">
            Image goes here
        </div>
      </div>

      <div class="bottom-section">
        <div class="container">
          <div class="image-box">
            <img class="item" src={img1} alt="Gitanjal Rao"/>
            <p class="name">NAME HERE</p>
            <p class="desc">DESCRIPTION HERE</p>
          </div>
          <div class="image-box">
            <img class="item" src={img2} alt="Yulima Rojas"/>
            <p class="name">Yulimar Rojas</p>
            <p class="desc">Set the world record for “Women’s Triple Jump” in the 2020 olympics!</p>
          </div>
          <div class="image-box">
            <img class="item" src={img3} alt="Esther Duflo"/>
            <p class="name">Esther Duflo</p>
            <p class="desc">Won the “Nobel Memorial Prize in Economic Sciences” in 2019, becoming only the second woman to do so in history!</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Landing;
