import React from "react"
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {AppNavigation} from './Navigation/AppNavigation'
import {Home} from "./components/Home/Home";
import {Dog} from "./components/Dog /Dog";
import {Fox} from "./components/Fox/Fox";
import {Cat} from "./components/Cat/Cat";

function App() {
  return (
      <Router>
          <ul style={{}}>
              <li style={{backgroundColor: 'red', display: 'inline'}}><a href="/home">Home</a></li>
              <li style={{backgroundColor: 'red', display: 'inline'}}><a href="/dog">Dog</a></li>
              <li style={{backgroundColor: 'red', display: 'inline'}}><a href="/fox">Fox</a></li>
              <li style={{backgroundColor: 'red', display: 'inline'}}><a href="/cat">Cat</a></li>
          </ul>
          <div>
              <Route path='/home' component={Home}/>
              <Route path='/dog' component={Dog}/>
              <Route path='/fox' component={Fox}/>
              <Route path='/cat' component={Cat}/>
          </div>
      </Router>
  );
}

export default App;
