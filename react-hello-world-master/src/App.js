import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard';
import Login from './login.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />  
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
