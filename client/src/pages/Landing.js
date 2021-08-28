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
{/* title */}
      <div class="title">
        <h1> AllTheHype; </h1>
      </div>
{/* intro pa */}
      <div class="intro-text">
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 
          1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
          book. It has survived not only five centuries, but also the leap into electronic typIpsum. 
        </p>
      </div>
      
      
      <div class="container">
        <img class="item" src={img1} alt="Gitanjal Rao"/>
        <img class="item" src={img2} alt="Yulima Rojas"/>
        <img class="item" src={img3} alt="Esther Duflo"/>
      </div>

      <div class="column">
        <p>image goees heere</p>
      </div>
      
      <div class="main"></div>

{/*
    <a class="twitter-timeline" href="https://twitter.com/Mattie85046400?ref_src=twsrc%5Etfw">Tweets by AllTheHype</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


    <TwitterTimelineEmbed
      sourceType="Profile"
      screenName="AllTheHype"
      options="{{height: 400}}"
    /> */}



    </div>

  
  );
}

export default Landing;
