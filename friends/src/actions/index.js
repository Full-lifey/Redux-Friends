import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

export const loggingIn = () => dispatch => {
  dispatch({ type: LOGGING_IN });
  axios
    .get('http://localhost:5000')
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
