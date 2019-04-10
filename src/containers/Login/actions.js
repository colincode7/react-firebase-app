/*
 *
 * Login actions
 *
 */

import { push } from 'connected-react-router';

import {
  LOGIN_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS
} from './constants';

export const loginChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: LOGIN_CHANGE,
    payload: formData
  };
};

export const login = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const user = getState().login.loginFormData;

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
        setTimeout(() => {
          dispatch(push('/dashboard'));
        }, 1000);
      })
      .catch(error => {
        dispatch({ type: 'LOGIN_ERROR', error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      });
  };
};
