/*
 *
 * Signup
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

export class Signup extends React.PureComponent {
  render() {
    return <div>Signup </div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  actions
)(Signup);
