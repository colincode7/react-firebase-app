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
  SIGNOUT_SUCCESS,
  SET_LOGIN_LOADING,
  HIDE_LOGIN_ERROR
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
    dispatch({ type: SET_LOGIN_LOADING });

    const user = getState().login.loginFormData;

    const successfulOptions = {
      title: "Hey, it's good to see you!",
      position: 'tr',
      autoDismiss: 1
    };

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
        dispatch(success(successfulOptions));
      })
      .catch(err => {
        dispatch(handleLoginError(err));
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
        dispatch({ type: SIGNOUT_SUCCESS });
        dispatch(info(notifOptions));
      });
  };
};

export const handleLoginError = err => {
  const unsuccessfulOptions = {
    title: 'Hey, Please try to login in again!',
    position: 'tr',
    autoDismiss: 1
  };

  return (dispatch, getState) => {
    dispatch({ type: LOGIN_ERROR, err });
    dispatch(error(unsuccessfulOptions));

    setTimeout(() => {
      dispatch({ type: HIDE_LOGIN_ERROR });
    }, 3000);

    switch (err.code) {
      case 'auth/user-not-found':
        getState().login.loginFormData.email = '';
        break;
      case 'auth/wrong-password':
        getState().login.loginFormData.password = '';
        break;
      default:
        return null;
    }
  };
};
