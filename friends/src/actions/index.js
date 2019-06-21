import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

export const logIn = creds => dispatch => {
  dispatch({ type: LOGGING_IN });
  return axiosWithAuth()
    .post('/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGGED_IN });
      return true;
    })
    .catch(err => {
      console.log(err.response.data.error);
      dispatch({ type: LOGGED_OUT, payload: err.response.data.error });
    });
};

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axiosWithAuth()
    .get('/friends')
    .then(res => {
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response.data.error);
      dispatch({
        type: FETCH_FRIENDS_FAILURE,
        payload: err.response.data.error
      });
    });
};
