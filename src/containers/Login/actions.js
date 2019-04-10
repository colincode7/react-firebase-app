/*
 *
 * Login actions
 *
 */

import { push } from 'connected-react-router';
import { success, error, info } from 'react-notification-system-redux';

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

    const successfulOptions = {
      title: "Hey, it's good to see you!",
      position: 'tr',
      autoDismiss: 1
    };

    const unsuccessfulOptions = {
      title: 'Hey, Please try to login in again!',
      position: 'tr',
      autoDismiss: 1
    };

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
        dispatch(success(successfulOptions));

        setTimeout(() => {
          dispatch(push('/dashboard'));
        }, 2000);
      })
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR', err });
        dispatch(error(unsuccessfulOptions));
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const notifOptions = {
      title: 'Signed Out Successfully!',
      position: 'tr',
      autoDismiss: 1
    };

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
        dispatch(info(notifOptions));
      });
  };
};
