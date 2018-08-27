import React, { Component } from 'react';
import Nav from './Nav.js';
import './App.css';
import Landing from './Landing/Landing.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
      </div>

    );
  }
}

export default App;
