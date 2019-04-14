/*
 *
 * Signup actions
 *
 */

import { push } from 'connected-react-router';
import { success, error } from 'react-notification-system-redux';

import {
  SIGNUP_CHANGE,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SET_SIGNUP_LOADING,
  HIDE_SIGNUP_ERROR
} from './constants';

export const signupChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: SIGNUP_CHANGE,
    payload: formData
  };
};

export const signUp = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: SET_SIGNUP_LOADING });
    const firebase = getFirebase();
    const firestore = getFirestore();

    const user = getState().signup.signupFormData;

    const successfulOptions = {
      title: `Hey ${user.firstName}, Thank you for signing up`,
      position: 'tr',
      autoDismiss: 1
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(resp => {
        return firestore
          .collection('users')
          .doc(resp.user.uid)
          .set({
            firstName: user.firstName,
            lastName: user.lastName,
            initials: user.firstName + ' ' + user.lastName
          });
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
        dispatch(success(successfulOptions));
      })
      .catch(err => {
        dispatch(handleSignupError(err));
      });
  };
};

export const handleSignupError = err => {
  const unsuccessfulOptions = {
    title: 'Hey, Please try to signup again!',
    position: 'tr',
    autoDismiss: 1
  };

  return (dispatch, getState) => {
    dispatch({ type: SIGNUP_ERROR, err });
    dispatch(error(unsuccessfulOptions));

    setTimeout(() => {
      dispatch({ type: HIDE_SIGNUP_ERROR });
    }, 3000);

    switch (err.code) {
      case 'auth/invalid-email':
        getState().signup.signupFormData.email = '';
        break;
      case 'auth/weak-password':
        getState().signup.signupFormData.password = '';
        break;
      case 'auth/email-already-in-use':
        getState().signup.signupFormData.email = '';
        break;
      default:
        return null;
    }
  };
};
