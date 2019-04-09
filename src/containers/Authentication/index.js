/**
 *
 * Authentication
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

export default function(ComposedComponent) {
  class Authentication extends React.PureComponent {
    componentWillMount() {
      if (this.props.authenticated === null) {
      }
    }

    render() {
      if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      }
      return null;
    }
  }

  const mapStateToProps = state => {
    return {};
  };

  return connect(
    mapStateToProps,
    actions
  )(Authentication);
}
