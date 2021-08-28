import './App.css';
import Landing from './pages/Landing';
import Input from './pages/Input';
import React from "react";

function App() {
  const [data, setData] = React.useState("empty");

  // when this function is called, the twitter post is made
  function call(){
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }

  return (
    <div>
      <Landing />
      <Input />
    </div>
  );
}

/* 
<div className="App">
      <button onClick={call}>{data}</button>
    </div>
*/

export default App;
