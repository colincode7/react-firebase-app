/**
 *
 * Authentication
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import actions from '../../actions';

export default function(ComposedComponent) {
  class Authentication extends React.PureComponent {
    componentWillMount() {}

    render() {
      const { authentication } = this.props;

      if (!authentication.uid) return <Redirect to='/login' />;
      else {
        return <ComposedComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = state => {
    return {
      authentication: state.firebase.auth
    };
  };

  return connect(
    mapStateToProps,
    actions
  )(Authentication);
}
