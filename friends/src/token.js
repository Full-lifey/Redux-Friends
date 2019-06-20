import { LOGGED_IN } from './actions';

export const setToken = store => next => action => {
  if (action.type === LOGGED_IN) {
    console.log(action);
  }
  next(action);
};
