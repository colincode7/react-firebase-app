/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

export class Login extends React.PureComponent {
  render() {
    return <div>Login</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  actions
)(Login);
