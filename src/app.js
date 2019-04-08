/**
 *
 * app.js
 * This is the application component. setup and boilerplate
 */

import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';

import Application from './containers/Application';

// Import application sass styles
import './styles/sass/style.scss';

const app = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Application />
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(app);
