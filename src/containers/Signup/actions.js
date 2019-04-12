/*
 *
 * Signup actions
 *
 */

import { push } from 'connected-react-router';
import { success, error, info } from 'react-notification-system-redux';

import {
  SIGNUP_CHANGE,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SET_LOADING
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
    dispatch({ type: 'SET_LOADING' });
    const firebase = getFirebase();
    const firestore = getFirestore();

    const user = getState().signup.signupFormData;

    const successfulOptions = {
      title: `Hey ${user.firstName}, Thank you for signing up`,
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

export const signInWithGoogle = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: 'SET_LOADING' });

    const firebase = getFirebase();
    const firestore = getFirestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });

    const unsuccessfulOptions = {
      title: 'Hey, Please try to signin again!',
      position: 'tr',
      autoDismiss: 1
    };

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(resp => {
        const user = resp.user.displayName.split(' ');

        firestore
          .collection('users')
          .doc(resp.user.uid)
          .set({
            firstName: user[0],
            lastName: user[1],
            initials: resp.user.displayName
          });

        const successfulOptions = {
          title: `Hey ${resp.user.displayName}, Thank you for signing in`,
          position: 'tr',
          autoDismiss: 1
        };

        dispatch({ type: 'SIGNUP_SUCCESS' });
        dispatch(success(successfulOptions));

        setTimeout(() => {
          dispatch(push('/dashboard'));
        }, 2000);
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', err });
        dispatch(error(unsuccessfulOptions));
      });
  };
};

export const signInWithFacebook = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: 'SET_LOADING' });

    const firebase = getFirebase();
    const firestore = getFirestore();

    const provider = new firebase.auth.FacebookAuthProvider();

    const unsuccessfulOptions = {
      title: 'Hey, Please try to signin again!',
      position: 'tr',
      autoDismiss: 1
    };

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(resp => {
        const user = resp.user.displayName.split(' ');

        firestore
          .collection('users')
          .doc(resp.user.uid)
          .set({
            firstName: user[0],
            lastName: user[1],
            initials: resp.user.displayName
          });

        const successfulOptions = {
          title: `Hey ${resp.user.displayName}, Thank you for signing in`,
          position: 'tr',
          autoDismiss: 1
        };

        dispatch({ type: 'SIGNUP_SUCCESS' });
        dispatch(success(successfulOptions));

        setTimeout(() => {
          dispatch(push('/dashboard'));
        }, 2000);
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', err });
        dispatch(error(unsuccessfulOptions));
      });
  };
};
