/*
 *
 * SignupProvider actions
 *
 */

import { push } from 'connected-react-router';
import { success, error } from 'react-notification-system-redux';

import {
  SIGNUP_PROVIDER_SUCCESS,
  SIGNUP_PROVIDER_ERROR,
  SET_PROVIDER_LOADING
} from './constants';

export const signInWithGoogle = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: SET_PROVIDER_LOADING });

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

        dispatch({ type: SIGNUP_PROVIDER_SUCCESS });
        dispatch(success(successfulOptions));

        setTimeout(() => {
          dispatch(push('/dashboard'));
        }, 2000);
      })
      .catch(err => {
        dispatch({ type: SIGNUP_PROVIDER_ERROR, err });
        dispatch(error(unsuccessfulOptions));
      });
  };
};

export const signInWithFacebook = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: SET_PROVIDER_LOADING });

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

        dispatch({ type: SIGNUP_PROVIDER_SUCCESS });
        dispatch(success(successfulOptions));

        setTimeout(() => {
          dispatch(push('/dashboard'));
        }, 2000);
      })
      .catch(err => {
        dispatch({ type: SIGNUP_PROVIDER_ERROR, err });
        dispatch(error(unsuccessfulOptions));
      });
  };
};
