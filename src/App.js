import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faCodeBranch);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;
