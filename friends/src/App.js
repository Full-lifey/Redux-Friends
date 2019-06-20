import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import LoginForm from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/friends'>Friends</Link>
        </li>
      </ul>
      <Route path='/login' component={LoginForm} />
      <PrivateRoute exact path='/protected' component={GasPrices} />
    </div>
  );
}

export default App;
