/**
 *
 * Application
 *
 */

import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// routes
import LoginPage from '../Login';
import SignupPage from '../Signup';
import HomePage from '../HomePage';

export class Application extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
        </Switch>
      </Router>
    );
  }
}

export default Application;
