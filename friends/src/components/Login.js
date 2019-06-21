import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { logIn } from '../actions';

import './login.scss';

class LoginForm extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };
  login = e => {
    e.preventDefault();
    this.props.logIn(this.state.credentials).then(res => {
      res && this.props.history.push('/friends');
    });
  };
  changeHandler = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    console.log(this.props);
    return (
      <div className='login-form'>
        <h1>Login</h1>
        <form onSubmit={this.login}>
          <input
            type='text'
            value={this.state.username}
            name='username'
            placeholder='Username'
            onChange={this.changeHandler}
          />
          <input
            type='password'
            value={this.state.password}
            name='password'
            placeholder='Password'
            onChange={this.changeHandler}
          />
          <button>
            {this.props.loggingIn ? (
              <Loader type='ThreeDots' color='#1f2a38' height='12' width='26' />
            ) : (
              'Log in'
            )}
          </button>
          {this.props.error && <h3 className='error'>{this.props.error}</h3>}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loggingIn: state.loggingIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { logIn }
)(LoginForm);
