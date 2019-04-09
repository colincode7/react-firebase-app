/*
 *
 * Signup actions
 *
 */

import { SIGNUP_CHANGE } from './constants';

export function signupChange(name, value) {
  let formData = {};
  formData[name] = value;

  return {
    type: SIGNUP_CHANGE,
    payload: formData
  };
}
