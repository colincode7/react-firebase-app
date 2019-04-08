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
    const { isMenuOpen, toggleMenu } = this.props;

    return <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />;
  }
}

const mapStateToProps = state => {
  return {
    isMenuOpen: state.navigation.isMenuOpen
  };
};

export default connect(
  mapStateToProps,
  actions
)(Navigation);
