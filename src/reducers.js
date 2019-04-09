/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

// import reducers
import applicationReducer from './containers/Application/reducer';
import homepageReducer from './containers/Homepage/reducer';
import signupReducer from './containers/Signup/reducer';
import loginReducer from './containers/Login/reducer';
import navigationReducer from './containers/Navigation/reducer';

const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    applicaiton: applicationReducer,
    homepage: homepageReducer,
    signup: signupReducer,
    login: loginReducer,
    navigation: navigationReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
  });

export default createReducer;
