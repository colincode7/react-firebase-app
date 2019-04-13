/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as notifications } from 'react-notification-system-redux';

// import reducers
import applicationReducer from './containers/Application/reducer';
import homepageReducer from './containers/Homepage/reducer';
import signupReducer from './containers/Signup/reducer';
import loginReducer from './containers/Login/reducer';
import signupProviderReducer from './containers/SignupProvider/reducer';
import forgotPasswordReducer from './containers/ForgotPassword/reducer';
import navigationReducer from './containers/Navigation/reducer';
import authenticationReducer from './containers/Authentication/reducer';

const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    applicaiton: applicationReducer,
    homepage: homepageReducer,
    signup: signupReducer,
    login: loginReducer,
    signupProvider: signupProviderReducer,
    forgotPassword: forgotPasswordReducer,
    navigation: navigationReducer,
    authentication: authenticationReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
  });

export default createReducer;
