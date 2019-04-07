/**
 *
 * actions.js
 * actions configuration
 */

import { bindActionCreators } from 'redux';

import * as application from './containers/Application/actions';
import * as homepage from './containers/Homepage/actions';
import * as signup from './containers/Signup/actions';
import * as login from './containers/Login/actions';

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...application,
      ...homepage,
      ...signup,
      ...login
    },
    dispatch
  );
}
