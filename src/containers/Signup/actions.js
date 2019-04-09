/*
 *
 * Signup actions
 *
 */

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
      })
      .catch(error => {
        dispatch({ type: 'SIGNUP_ERROR', error });
      });
  };
};
