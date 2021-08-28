import React from "react";
import './input.css';
import { TwitterTimelineEmbed} from 'react-twitter-embed'; 


function Input() {

  // Function thats called when someone clicks "Hype me up"
  function hypeMeUp (){
    console.log("button Works");
     
  }

  return (
    <div class="input-container">
      <div class="input-area">
        <h3 class="input-title">Get The Hype</h3>
      <form>
          <label for="accomplishment"> Accomplishment : </label>
          <textarea id="accomplishment"> </textarea>

          <label for="name"> Name : </label> 
          <input type="text" id="name" name="name" />

          <label for="time"> How long did it take you? : </label> 
          <input type="text" id="time" name="time" /> 

          <label>Are you comfortable with feminine gendered words?</label>
          <div>
            <input type="radio" id="yes" name="yes" value="Yes" />
            <label for="yes">Yes</label> 
          </div>
          <div>
            <input type="radio" id="no" name="no" value="no" />
            <label for="no">No</label>
          </div>
        </form>

        <button onClick={hypeMeUp} class="hype-button">Hype Me Up</button>
    
      </div>
      <div class="input-image">
          <div class="image-side" >
          <TwitterTimelineEmbed
            sourceType="Profile"
            screenName="Mattie85046400"
            options="{{height: 700}}"
          />
          </div>
      </div>
    </div>
  );
}

/* 
<div className="App">
      <button onClick={call}>{data}</button>
    </div>
*/

export default Input;