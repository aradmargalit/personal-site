import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import About from './components/About/About';

library.add(faEnvelope, faCodeBranch);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/about-me" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
