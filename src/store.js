/**
 *
 * store.js
 * store configuration
 */

import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebasebConfig from './firebase';

import createReducer from './reducers';

export const history = createBrowserHistory({
  basename: '/',
  hashType: 'noslash'
});

const middlewares = [
  routerMiddleware(history),
  thunk.withExtraArgument({ getFirebase, getFirestore })
];

const enhancers = [
  applyMiddleware(...middlewares),
  reactReduxFirebase(firebasebConfig, {
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady: true
  }),
  reduxFirestore(firebasebConfig)
];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  createReducer(history),
  composeEnhancers(...enhancers)
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require
    store.replaceReducer(nextRootReducer(history));
  });
}

export default store;
