/**
 *
 * Navigation
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import Header from '../../components/Header';

export class Navigation extends React.PureComponent {
  componentDidMount() {}

  render() {
    const { isMenuOpen, toggleMenu, signOut, authentication } = this.props;

    return (
      <Header
        authentication={authentication}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        signOut={signOut}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isMenuOpen: state.navigation.isMenuOpen,
    authentication: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(Navigation);
