import React, { useState } from "react";
import { Spring, useTransition, animated } from 'react-spring';
import './input.css';
import { TwitterTimelineEmbed} from 'react-twitter-embed';

function Input() {
  const [accomplishment, setAccomplishment] = useState('');
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
 const [showResult, setShowResult] = useState(false);
 const [items, setItems] = useState([]);
 const [array, setArray] = useState([]);

 let i = 0 ;

 //let array = ["hi", "hello", "heyy"];

 const transition = useTransition(items, {
    from:{x: -300, y: 300, opacity: 0},
    enter: item => (next) => (
      next({x: item.x, y: item.y, opacity: 1, delay: item.delay})
    ),
    leave:{x: -100, y: 800, opacity: 0}
 })


  // Function thats called when someone clicks "Hype me up"
  function hypeMeUp (){
    console.log("button Works");
    setAccomplishment(document.getElementById('accomplishment').value);
    setName(document.getElementById('name').value);
    setTime(document.getElementById('time').value);

    setArray([
      `Hey ${document.getElementById('name').value} ! Congratulations on your incredible accomplishment!`,
      `I am so impressed with what you achieved!`,
      `I mean.. The fact that you ${document.getElementById('accomplishment').value}`,
      `In ${document.getElementById('time').value}!!!! Damn!!!!`,
      `POP OFF${document.getElementById('yes').checked ? ' GIRL!' : '!'}`,
      `${document.getElementById('yes').checked ? 'Queen,' : 'Congratulations!'} you really know how to show everyone who's boss!`,
      `I know that it can sometimes feel like no one appreciates or values some of the amazing things you've done, ${document.getElementById('yes').checked ? 'especially as women,' : ' '} but just know that you're awesome`,
      `${document.getElementById('name').value}, I hope you feel proud about what you've accomplished`,
      `I mean, ${document.getElementById('yes').checked ? 'girl,' : ''} I'm absolutely mind blown`,
      `All the work you've done throughout life, it's paying off`,
      `YOU. DID. THAT.`
    ]);

    setItems(v => v.length ? [] : [
      {x:-500, y: 0, delay: 200},
      {x:-500, y: 50, delay: 1000},
      {x:500, y: 100, delay: 3000 },
      {x:500, y: 150, delay: 5000},
      {x:0, y: 200, delay: 7000},
      {x:40, y: 250, delay: 9000 },
      {x:-500, y: 300, delay: 11000},
      {x:-400, y: 350, delay: 13000},
      {x:-300, y: 400, delay: 15000 },
      {x:-300, y: 500, delay: 19000 },
      {x:0, y: 0, delay: 22000 },
    ]);
  }

  return (
    <div>
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

            <label>Are you comfortable with women / feminine gendered terms?</label>
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
      <div class="hype-result">
        {transition((style, item) =>
          item ? <animated.div class="word-box" style={style}><p class="hype-words">{array[i++]}</p></animated.div> : ''
        )}
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