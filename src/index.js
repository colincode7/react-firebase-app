/**
 *
 * index.js
 * This is the entry file for the application
 */

import React from 'react';
import ReactDOM from 'react-dom';

// Import application sass styles
import './styles/sass/style.scss';

import App from './app';

ReactDOM.render(<App />, document.getElementById('root'));
