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

export class Signup extends React.PureComponent {
  render() {
    const { signupFormData, signupError, signupChange, signUp } = this.props;

    return (
      <div className='signup-form'>
        <h1>SignUp</h1>
        <hr />
        {signupError != null && <Message error={signupError} />}
        <Row>
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
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signup.signupFormData,
    signupError: state.signup.signupError
  };
};

export default connect(
  mapStateToProps,
  actions
)(Signup);
