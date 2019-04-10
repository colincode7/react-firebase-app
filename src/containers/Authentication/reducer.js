/*
 *
 * Authentication reducer
 *
 */

import { DEFAULT_ACTION } from './constants';

const initialState = {};

const authenticationReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case DEFAULT_ACTION:
      return newState;
    default:
      return state;
  }
};

export default authenticationReducer;
