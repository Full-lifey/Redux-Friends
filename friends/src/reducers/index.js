import {
  LOGGING_IN,
  LOGGED_IN,
  LOGGED_OUT,
  FETCHING_FRIENDS,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE
} from '../actions';

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
    case LOGGED_OUT:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: true,
        error: ''
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        error: '',
        friends: action.payload
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    default:
      return state;
  }
};
