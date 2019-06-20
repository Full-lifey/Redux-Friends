import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

export const logIn = creds => dispatch => {
  console.log(creds);
  dispatch({ type: LOGGING_IN });
  return axiosWithAuth()
    .post('/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGGED_IN });
      return true;
    })
    .catch(err => console.log(err.response));
};
