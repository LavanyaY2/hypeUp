import './App.css';
import Landing from './pages/Landing';
import Input from './pages/Input';
import Meettheteam from './pages/Meettheteam';
import Resources from './pages/Resources';
import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  const [data, setData] = React.useState("empty");

  // when this function is called, the twitter post is made
  function call(){
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }


  return (
    
    <Router>
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/about">
            <Input />
          </Route>
        </Switch>
      </div>
      </Router>

    

    // //<div>
    //   <Landing />
    //   <Input />
    //   <Meettheteam />
    //   <Resources />
    //  </div>//

  );
}

/* 
<div className="App">
      <button onClick={call}>{data}</button>
    </div>
*/

export default App;
