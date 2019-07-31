import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/main.css';
import NavBarOnPhone from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Events from './components/Events.jsx'
import Organizations from './components/Organizations.jsx'
import IndividualEvent from './components/events/IndividualEvent.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBarOnPhone />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/events/:eventId" exact component={IndividualEvent} />
          <Route path="/organizations" component={Organizations} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
