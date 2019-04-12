/*
 *
 * Signup
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import Input from '../../components/Input';
import Message from '../../components/Message';
import SignInGoogle from '../../components/SignInGoogle';
import SignInFacebook from '../../components/SignInFacebook';
import LoadingIndicator from '../../components/LoadingIndicator';

export class Signup extends React.PureComponent {
  render() {
    const {
      signupFormData,
      signupError,
      signupChange,
      signUp,
      isLoading
    } = this.props;

    return (
      <div className='signup-form'>
        {isLoading && (
          <div>
            <LoadingIndicator />
            <div className='popup-background' />
          </div>
        )}
        <h1>SignUp</h1>
        <hr />
        {signupError != null && <Message error={signupError} />}
        <Row>
          <Col xs='12' md='6'>
            <Col xs='12' md='12'>
              <Input
                type={'text'}
                label={'Email Address'}
                name={'email'}
                placeholder={'Please Enter Your Email'}
                value={signupFormData.email}
                onInputChange={(name, value) => {
                  signupChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'text'}
                label={'First Name'}
                name={'firstName'}
                placeholder={'Please Enter Your First Name'}
                value={signupFormData.firstName}
                onInputChange={(name, value) => {
                  signupChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'text'}
                label={'Last Name'}
                name={'lastName'}
                placeholder={'Please Enter Your Last Name'}
                value={signupFormData.lastName}
                onInputChange={(name, value) => {
                  signupChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'password'}
                label={'Password'}
                name={'password'}
                placeholder={'Please Enter Your Password'}
                value={signupFormData.password}
                onInputChange={(name, value) => {
                  signupChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <hr />
              <button
                className='input-btn'
                type='submit'
                onClick={() => signUp()}
              >
                Sign Up
              </button>
            </Col>
          </Col>
          <Col xs='12' md='1'>
            <div className='separation'>
              <div className='sub-separation' />
              <p>OR</p>
              <div className='sub-separation' />
            </div>
          </Col>
          <Col xs='12' md='5'>
            <SignInGoogle signInWithGoogle={() => signInWithGoogle()} />
            <SignInFacebook signInWithFacebook={() => signInWithFacebook()} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signup.signupFormData,
    signupError: state.signup.signupError,
    isLoading: state.signup.isLoading
  };
};

export default connect(
  mapStateToProps,
  actions
)(Signup);
