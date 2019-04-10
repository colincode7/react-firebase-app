/*
 *
 * Login reducer
 *
 */

import {
  LOGIN_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS
} from './constants';

const initialState = {
  loginFormData: {
    email: '',
    password: ''
  },
  loginError: null,
  signoutError: null
};

const loginReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOGIN_CHANGE:
      newState = {
        ...state,
        loginFormData: { ...state.loginFormData, ...action.payload }
      };
      return newState;
    case 'LOGIN_SUCCESS':
      newState = {
        ...state,
        loginError: null,
        loginFormData: {
          email: '',
          password: ''
        }
      };
      return newState;
    case 'LOGIN_ERROR':
      newState = {
        ...state,
        loginError: action.err.message
      };
      return newState;
    case 'SIGNOUT_SUCCESS':
      newState = {
        ...state,
        signoutError: null
      };
      return newState;
    default:
      return state;
  }
};

export default loginReducer;
