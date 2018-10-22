import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import MenuBar from './components/MenuBar/MenuBar';
import Skills from './components/Skills/Skills';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={MenuBar} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about-me" component={About} />
          <Route exact path="/resume" component={Skills} />
        </div>
      </Router>
    );
  }
}

export default App;
