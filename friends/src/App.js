import React from 'react';
import './App.scss';
import { Route, Link } from 'react-router-dom';

import LoginForm from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';

function App() {
  return (
    <div className='App'>
      <ul className='navbar'>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/friends'>Friends</Link>
        </li>
      </ul>
      <Route path='/login' component={LoginForm} />
      <PrivateRoute exact path='/friends' component={Friends} />
    </div>
  );
}

export default App;
