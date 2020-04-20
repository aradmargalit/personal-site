import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import BasicInfo from './components/BasicInfo';
import MenuBar from './components/MenuBar';
import Resume from './components/Resume';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={MenuBar} />
        <Route exact path="/" component={BasicInfo} />
        <Route exact path="/about-me" component={About} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </Router>
  );
}
