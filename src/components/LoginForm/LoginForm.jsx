import React, {Component} from 'react';
import './LoginForm.css';

import SendData from 'containers/SendData';
import VkAuth from 'containers/VkAuth';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fab);

export default class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      send: false,
      vkAuth: false,
      sendData: {},
    };
  };
  handleChangeUsername = (e) => {
    this.setState({username: e.target.value});
  };
  handleChangePassword = (e) => {
    this.setState({password: e.target.value});
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const sendData = {
      username: this.state.username,
      password: this.state.password,
    };
    const jsonData = JSON.stringify(sendData);
    this.setState({
      sendData: jsonData,
      send: true,
    });
  };
  sendToFalse = () => this.setState({send: false});
  handleVkClick = () => {
    this.setState({vkAuth: true});
  };
  render() {
    return (
      <div className="forms" id="particles-js">
        {this.state.send ? <SendData
                             data={this.state.sendData}
                             sendToFalse={this.sendToFalse}
                             handler="user/login/"
                             handleAuth={this.props.handleAuth}/> : null}
        {this.state.vkAuth ? <VkAuth handleAuth={this.props.handleAuth}/> : null}
        <form name="form_login" className="form login" onSubmit={this.handleSubmit}>
          <h1 className="form-title">Auth</h1>
          <div className="form-group">
            <input type="text" className="form-input"
              onChange={this.handleChangeUsername} placeholder="Username"
              id="login-login" value={this.state.username} required/>
            <label className="form-label">Username</label>
          </div>
          <div className="form-group">
            <input type="password" className="form-input"
              onChange={this.handleChangePassword} placeholder="Password"
              id="login-password" value={this.state.password}
              required/>
            <label className="form-label"> Password </label>
          </div>
          <div className="buttons">
            <button className="switch-button secondary login">
              Sign up
            </button>
            <div className="vk-button" onClick={this.handleVkClick}>
              <FontAwesomeIcon icon={['fab', 'vk']} />
            </div>
            <button type="submit" className="login-button">
              Sign in
            </button>
          </div>
        </form>
      </div>
    );
  };
}
