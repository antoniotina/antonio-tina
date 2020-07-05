import React from 'react'
import Project from './components/projects/Projects'
import NavBar from './components/navbar/NavBar'
import Home from './components/index/Home'
import Info from './components/journey/Info'
import './style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/about" component={Info} />
          <Route path='*' exact={true} component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App
