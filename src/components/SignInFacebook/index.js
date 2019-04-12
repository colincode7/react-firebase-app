/**
 *
 * SignInFacebook
 *
 */

import React from 'react';

const SignInFacebook = props => {
  const { signInWithFacebook } = props;

  return (
    <div className='social-btn' onClick={signInWithFacebook}>
      <span className='facebook-icon' />
      <span className='facebook'>Sign In With Facebook</span>
    </div>
  );
};

export default SignInFacebook;
