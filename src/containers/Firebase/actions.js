/*
 *
 * Firebase actions
 *
 */

import { DEFAULT_ACTION } from './constants';

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION
//   };
// }

import app from 'firebase/app';
import 'firebase/auth';

import config from './config';

// *** Auth API ***

app.initializeApp(config);

const auth = app.auth();

export function doCreateUserWithEmailAndPassword(signupFormData) {
  console.log('signupFormData', signupFormData);

  auth
    .createUserWithEmailAndPassword(
      signupFormData.email,
      signupFormData.password
    )
    .then(authUser => {
      console.log('authUser', authUser);
    })
    .catch(error => {
      console.log('error', error);
    });
}
