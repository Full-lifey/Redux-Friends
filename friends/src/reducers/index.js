import { LOGGING_IN, LOGGED_IN, LOGGED_OUT } from '../actions';

const initialState = {
  friends: [],
  loggingIn: false,
  fetchingFriends: false,
  error: ''
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
        error: ''
      };
    case LOGGED_IN:
      return {
        ...state,
        loggingIn: false,
        error: ''
      };
    default:
      return state;
  }
};
