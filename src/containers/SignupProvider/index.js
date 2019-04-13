/*
 *
 * SignupProvider
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';
import Message from '../../components/Message';
import SignInGoogle from '../../components/SignInGoogle';
import SignInFacebook from '../../components/SignInFacebook';
import LoadingIndicator from '../../components/LoadingIndicator';

export class SignupProvider extends React.PureComponent {
  render() {
    const { signInWithGoogle, signInWithFacebook, isLoading } = this.props;

    return (
      <div className='social-login'>
        {isLoading && (
          <div>
            <LoadingIndicator />
            <div className='popup-background' />
          </div>
        )}
        <SignInGoogle signInWithGoogle={() => signInWithGoogle()} />
        <SignInFacebook signInWithFacebook={() => signInWithFacebook()} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.signupProvider.isLoading
  };
};

export default connect(
  mapStateToProps,
  actions
)(SignupProvider);
