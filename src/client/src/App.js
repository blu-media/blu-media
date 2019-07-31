import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/main.css';
import NavBarOnPhone from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Events from './components/Events.jsx'
import Organizations from './components/Organizations.jsx'
import IndividualEvent from './components/events/individualEvent.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBarOnPhone />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events/individual-event" exact component={IndividualEvent} />
          <Route path="/events" component={Events} />
          <Route path="/organizations" component={Organizations} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
