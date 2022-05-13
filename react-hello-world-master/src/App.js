import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from './dashboard';
import Login from './login.js';
import {clientId} from './login.js';
import {messages} from './model.js';
localStorage.setItem('clientId',clientId);

function browseMessages(text) {
  return{
    type: 'BROWSE',
    text
  }
}

function b_messages(state = [], action) {
  switch (action.type) {
    case 'BROWSE':
      return state.concat(action.text)
    default:
      return state
  }
}

const store2 = createStore(b_messages, [])
var message1 = new messages(1,"FAILED","Random message 1")
var message2 = new messages(2,"SUCCEDED","Random message 2")
var message3 = new messages(3,"SUCCEDED","Random message 3")
var message4 = new messages(4,"FAILED","Random message 4")
store2.dispatch(browseMessages(message1))
store2.dispatch(browseMessages(message2))
store2.dispatch(browseMessages(message3))
store2.dispatch(browseMessages(message4))


localStorage.setItem('messages', JSON.stringify(store2.getState()));
var messages_list = JSON.parse(localStorage.getItem('messages'));
for (let index = 0; index < messages_list.length; index++) {
    var temp_list2 = []
    const channel = messages_list[index];
      temp_list2.push(channel)
}

class App extends Component {
  render() {
    
    return (
      <>
        <Router>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard messages={store2.getState()}/>} />  
          </Routes>
        </Router>
      </>
    );
  }
}
export default App;
