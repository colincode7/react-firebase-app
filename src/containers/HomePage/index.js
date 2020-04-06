/**
 *
 * Homepage
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

export class Homepage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return <h2>Homepage</h2>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  actions
)(Homepage);
