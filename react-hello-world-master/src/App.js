import React from 'react';
import './App.css';
import { createStore } from 'redux'


class channels {
  constructor(name){
    this.name = name;
  }
}

var channels1 = new channels("A")
var channels2 = new channels("B")
var channels3 = new channels("C")
var channels4 = new channels("D")
const store = createStore(todos, ['Use Redux'])

store.dispatch(addTodo(channels1))
store.dispatch(addTodo(channels2))
store.dispatch(addTodo(channels3))
store.dispatch(addTodo(channels4))




function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

function addTodo(text) {
  return{
    type: 'ADD_TODO',
    text
  }
}

localStorage.setItem('user', JSON.stringify(store.getState()));
var user = JSON.parse(localStorage.getItem('user'));
console.log(user)



export default function App() {

  return (
    <div className="App">

      <h1>{JSON.stringify(user)}
        
      </h1>
    </div>
  );
}



