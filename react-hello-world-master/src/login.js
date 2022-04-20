import React, { Component } from 'react';
import './login.css';
import logo from './logo.jpg'

class Login extends Component {

  render() {
    return (
      <div className="Login">
        <header className="Login-header">
        <img src={logo} alt="logo"/>
        <form className="box" method="POST">
            <p><h2>Welcome in our app</h2></p>
            
        </form>

        </header>
      </div>
    );
  }
}
export default Login;
