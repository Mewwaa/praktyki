import React from 'react';
import './App.css';
import { createStore } from 'redux'

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

class messages{
  constructor(ifSucceded,content){
    this.ifSucceded = ifSucceded
    this.content = content
  }
}
const store2 = createStore(b_messages, [])
var message1 = new messages("FAILED","Random message 1")
var message2 = new messages("SUCCEDED","Random message 2")
var message3 = new messages("SUCCEDED","Random message 3")
var message4 = new messages("FAILED","Random message 4")
store2.dispatch(browseMessages(message1))
store2.dispatch(browseMessages(message2))
store2.dispatch(browseMessages(message3))
store2.dispatch(browseMessages(message4))



class channels {
  constructor(name){
    this.name = name;
  }
}

var channels1 = new channels("channel 1")
var channels2 = new channels("channel 2")
var channels3 = new channels("channel 3")
var channels4 = new channels("channel 4")
const store1 = createStore(b_channles, [])

store1.dispatch(browseChannels(channels1))
store1.dispatch(browseChannels(channels2))
store1.dispatch(browseChannels(channels3))
store1.dispatch(browseChannels(channels4))


function b_channles(state = [], action) {
  switch (action.type) {
    case 'BROWSE':
      return state.concat(action.text)
    default:
      return state
  }
}

function browseChannels(text) {
  return{
    type: 'BROWSE',
    text
  }
}


localStorage.setItem('channels', JSON.stringify(store1.getState()));
var channels_list = JSON.parse(localStorage.getItem('channels'));
for (let index = 0; index < channels_list.length; index++) {
    var temp_list1 = []
    const channel = channels_list[index];
      temp_list1.push(channel)
}

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
          <Route path="/dashboard" element={<Dashboard store1={store1.getState()} store2={store2.getState()}/>} />  
          </Routes>
        </Router>
      </>
    );
  }
}



