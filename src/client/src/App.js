// React Imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import NavBarOnPhone from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import Events from './components/Events/Events.jsx'
import Organizations from './components/Organizations/Organizations.jsx'
import IndividualEvent from './components/Events/IndividualEvent/IndividualEvent.jsx';
import Login from './components/Auth/Login.jsx';

import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App fontFamilyNovecento">
        <NavBarOnPhone />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/events/:eventId" exact component={IndividualEvent} />
          <Route path="/organizations" component={Organizations} />
          <Route path="/google-login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
