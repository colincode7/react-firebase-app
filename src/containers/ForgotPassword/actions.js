/*
 *
 * ForgotPassword actions
 *
 */

import { push } from 'connected-react-router';
import { success, error } from 'react-notification-system-redux';

import {
  FORGOT_PASSWORD_CHANGE,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  HIDE_FORGOT_PASSWORD_ERROR
} from './constants';

export const forgotPasswordChange = (name, value) => {
  return {
    type: FORGOT_PASSWORD_CHANGE,
    payload: value
  };
};

export const forgotPassowrd = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const user = getState().forgotPassword.forgotFormData;

    const successfulOptions = {
      title: 'Hey, Please check you email to reset your password!',
      position: 'tr',
      autoDismiss: 1
    };

    const unsuccessfulOptions = {
      title: 'Hey, Please try again!',
      position: 'tr',
      autoDismiss: 1
    };

    firebase
      .auth()
      .sendPasswordResetEmail(user.email)
      .then(() => {
        dispatch({ type: FORGOT_PASSWORD_SUCCESS });
        dispatch(success(successfulOptions));

        setTimeout(() => {
          dispatch(push('/login'));
        }, 2000);
      })
      .catch(err => {
        dispatch({ type: FORGOT_PASSWORD_ERROR, err });
        dispatch(error(unsuccessfulOptions));

        setTimeout(() => {
          dispatch({ type: HIDE_FORGOT_PASSWORD_ERROR });
        }, 3000);
      });
  };
};
