/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import actions from '../../actions';
import Input from '../../components/Input';
import Message from '../../components/Message';
import LoadingIndicator from '../../components/LoadingIndicator';

import SignupProvider from '../SignupProvider';

export class Login extends React.PureComponent {
  render() {
    const {
      authentication,
      loginFormData,
      loginError,
      loginChange,
      login,
      isLoading
    } = this.props;

    if (authentication.uid) return <Redirect to='/' />;

    return (
      <div className='login-form'>
        {isLoading && (
          <div>
            <LoadingIndicator />
            <div className='popup-background' />
          </div>
        )}
        <h1>Login</h1>
        <hr />
        {loginError != null && <Message error={loginError} />}
        <Row>
          <Col xs='12' md='6'>
            <Col xs='12' md='12'>
              <Input
                type={'text'}
                label={'Email Address'}
                name={'email'}
                placeholder={'Please Enter Your Email'}
                value={loginFormData.email}
                onInputChange={(name, value) => {
                  loginChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'password'}
                label={'Password'}
                name={'password'}
                placeholder={'Please Enter Your Password'}
                value={loginFormData.password}
                onInputChange={(name, value) => {
                  loginChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <hr />
              <button
                className='input-btn'
                type='submit'
                onClick={() => login()}
              >
                Login
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
            <SignupProvider />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authentication: state.firebase.auth,
    loginFormData: state.login.loginFormData,
    loginError: state.login.loginError,
    isLoading: state.login.isLoading
  };
};

export default connect(
  mapStateToProps,
  actions
)(Login);
