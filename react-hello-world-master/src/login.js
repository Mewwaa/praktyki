import React, { Component } from 'react';
import './login.css';
import logo from './logo.jpg'

class Login extends Component {

  render() {

    const scopes = "identity.basic,identity.email";
    const clientId = '3372401797858.3408464854688'
    const url = `https://slack.com/oauth/v2/authorize?user_scope=${scopes}&client_id=${clientId}`;

    return (
      <div className="Login">
        <header className="Login-header">
        <img src={logo} alt="logo"/>
        <form className="box" method="POST">
            <p><h2>Welcome in our app</h2></p>
            <a href={url} ><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack@2x.png"/></a>
        </form>
        </header>
      </div>
    );
  }
}
export default Login;
