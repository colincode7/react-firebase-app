/*
 *
 * Login reducer
 *
 */

import {
  LOGIN_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SET_LOADING
} from './constants';

const initialState = {
  loginFormData: {
    email: '',
    password: ''
  },
  isLoading: false,
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
        },
        isLoading: false
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
        signoutError: null,
        isLoading: false
      };
      return newState;
    case 'SET_LOADING':
      newState = {
        ...state,
        isLoading: true
      };
      return newState;
    default:
      return state;
  }
};

export default loginReducer;
