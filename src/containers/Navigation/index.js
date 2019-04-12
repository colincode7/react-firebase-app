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
    const {
      isMenuOpen,
      toggleMenu,
      signOut,
      authentication,
      user
    } = this.props;

    return (
      <Header
        authentication={authentication}
        user={user}
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
    authentication: state.firebase.auth,
    user: state.firebase.profile
  };
};

export default connect(
  mapStateToProps,
  actions
)(Navigation);
