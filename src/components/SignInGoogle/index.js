/**
 *
 * SignInGoogle
 *
 */

import React from 'react';

const SignInGoogle = props => {
  const { signInWithGoogle } = props;

  return (
    <div className='social-btn' onClick={signInWithGoogle}>
      <span className='google-icon' />
      <span className='google'>Sign In With Google</span>
    </div>
  );
};

export default SignInGoogle;
