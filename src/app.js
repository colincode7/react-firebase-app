/**
 *
 * app.js
 * This is the application component. setup and boilerplate
 */

import React from 'react';
import { hot } from 'react-hot-loader';

import Application from './containers/Application';

const app = () => <Application />;

export default hot(module)(app);
