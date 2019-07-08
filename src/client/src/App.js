import React from 'react';
import './styles/main.css';
// import { BrowserHistory } from 'react-router'
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./components/Home.jsx"
import Events from "./components/Events.jsx"
import Organizations from "./components/Organizations.jsx"


import Header from './components/Header.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/events" exact={true} component={Events}/>
        <Route path="/organizations" exact={true} component={Organizations}/>
      </Router>
    </div>
  );
}

export default App;
