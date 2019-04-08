/**
 *
 * Application
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';

import actions from '../../actions';

// routes
import LoginPage from '../Login';
import SignupPage from '../Signup';
import HomePage from '../Homepage';

export class Application extends React.PureComponent {
  componentDidMount() {}
  application;
  render() {
    return (
      <div className='application'>
        <main className='main'>
          <div className='wrapper'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/signup' component={SignupPage} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  actions
)(Application);
