import React from "react";
import './landing.css';
import random from '../../src/images/random.jpg';

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
      
      <div class="column">
        <img src={random} alt="random image"/>
      </div>
      
      <div class="main"></div>
    </div>
  );
}

/* 
<div className="App">
      <button onClick={call}>{data}</button>
    </div>
*/

export default Landing;
