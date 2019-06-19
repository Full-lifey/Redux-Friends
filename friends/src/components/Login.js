import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginForm extends Component {
  constructor() {
    super();
    state = {
      username: '',
      password: ''
    };
  }
  login = e => {};
  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.login}>
        <input
          type='text'
          value={this.state.username}
          name='username'
          placeholder='Username'
          onChange={this.changeHandler}
        />
        <input
          type='text'
          value={this.state.password}
          name='password'
          placeholder='Password'
          onChange={this.changeHandler}
        />
        <button>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {};
};
