/**
 *
 * Dashboard
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

export class Dashboard extends React.PureComponent {
  componentDidMount() {}

  render() {
    return <h2 className='dashboard'>This is Dashboard</h2>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    isMenuOpen: state.navigation.isMenuOpen
  };
};

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
