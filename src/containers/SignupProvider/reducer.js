/*
 *
 * SignupProvider reducer
 *
 */

import {
  SIGNUP_PROVIDER_SUCCESS,
  SIGNUP_PROVIDER_ERROR,
  SET_PROVIDER_LOADING
} from './constants';

const initialState = {
  isLoading: false
};

const signupProviderReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SIGNUP_PROVIDER_SUCCESS:
      newState = {
        ...state,
        isLoading: false
      };
      return newState;
    case SIGNUP_PROVIDER_ERROR:
      newState = {
        ...state,
        isLoading: false
      };
      return newState;
    case SET_PROVIDER_LOADING:
      newState = {
        ...state,
        isLoading: true
      };
      return newState;
    default:
      return state;
  }
};

export default signupProviderReducer;
