/*
 *
 * Signup reducer
 *
 */

import { SIGNUP_CHANGE, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

const initialState = {
  signupFormData: {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  },
  signupError: null
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
    case 'SIGNUP_SUCCESS':
      newState = {
        ...state,
        signupError: null
      };
      return newState;

    case 'SIGNUP_ERROR':
      newState = {
        ...state,
        signupError: action.error.message
      };
      return newState;

    default:
      return state;
  }
};

export default signupReducer;
