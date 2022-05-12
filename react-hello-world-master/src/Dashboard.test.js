import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';
import { messages } from './model';

var message1 = new messages("FAILED","Random message 1")
var message2 = new messages("SUCCEDED","Random message 2")
var message3 = new messages("SUCCEDED","Random message 3")
var message4 = new messages("FAILED","Random message 4")

var messagesList = [ message1, message2, message3, message4]


it('renders without crashing', () => {
  localStorage.setItem('messages', JSON.stringify(messagesList));
  localStorage.setItem('clientId', '3372401797858.3408464854688');
  
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard messages={messagesList}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
