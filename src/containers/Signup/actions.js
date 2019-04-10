/*
 *
 * Signup actions
 *
 */

import { push } from 'connected-react-router';
import { success, error, info } from 'react-notification-system-redux';

import { SIGNUP_CHANGE, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

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
    const firebase = getFirebase();
    const firestore = getFirestore();

    const user = getState().signup.signupFormData;

    const successfulOptions = {
      title: 'Hey, Thank you for signing up',
      position: 'tr',
      autoDismiss: 1
    };

    const unsuccessfulOptions = {
      title: 'Hey, Please try to signup again!',
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
            initials: user.firstName + user.lastName
          });
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
        dispatch(success(successfulOptions));
        dispatch(push('/dashboard'));
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', err });
        dispatch(error(unsuccessfulOptions));
      });
  };
};
