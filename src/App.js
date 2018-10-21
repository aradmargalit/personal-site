import React, { Component } from 'react';
import Landing from './components/Landing/Landing';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
