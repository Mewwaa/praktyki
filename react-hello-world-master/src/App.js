import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard';

import Login from './login.js'

class App extends Component {
  render() {
    return (
      <div>
        <Login />
       <Dashboard />
      </div>
    );
  }
}

export default App;
