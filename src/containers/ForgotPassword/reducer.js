/*
 *
 * ForgotPassword reducer
 *
 */

import {
  FORGOT_PASSWORD_CHANGE,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  HIDE_FORGOT_PASSWORD_ERROR
} from './constants';

const initialState = {
  forgotFormData: {
    email: ''
  },
  forgotError: null
};

const forgotPasswordReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FORGOT_PASSWORD_CHANGE:
      newState = {
        ...state,
        forgotFormData: {
          email: action.payload
        }
      };
      return newState;
    case FORGOT_PASSWORD_SUCCESS:
      newState = {
        ...state,
        forgotError: null,
        forgotFormData: {
          email: ''
        }
      };
      return newState;
    case FORGOT_PASSWORD_ERROR:
      newState = {
        ...state,
        forgotError: action.err.message,
        forgotFormData: {
          email: ''
        }
      };
      return newState;
    case HIDE_FORGOT_PASSWORD_ERROR:
      newState = {
        ...state,
        forgotError: null
      };
      return newState;
    default:
      return state;
  }
};

export default forgotPasswordReducer;
