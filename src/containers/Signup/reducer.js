/*
 *
 * Signup reducer
 *
 */

import { SIGNUP_CHANGE } from './constants';

const initialState = {
  signupFormData: {
    email: '',
    password: ''
  }
};

const signupReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SIGNUP_CHANGE:
      newState = {
        ...state,
        signupFormData: { ...state.signupFormData, ...action.payload }
      };
      return newState;
    default:
      return state;
  }
};

export default signupReducer;
