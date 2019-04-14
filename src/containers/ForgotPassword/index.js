/*
 *
 * ForgotPassword
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';

import actions from '../../actions';
import Input from '../../components/Input';
import Message from '../../components/Message';

export class ForgotPassword extends React.PureComponent {
  render() {
    const {
      authentication,
      forgotFormData,
      forgotError,
      forgotPasswordChange,
      forgotPassowrd
    } = this.props;

    if (authentication.uid) return <Redirect to='/dashboard' />;

    return (
      <div className='forgot-password-form'>
        <h1>Forgot Password</h1>
        <hr />
        {forgotError != null && <Message error={forgotError} type={'danger'} />}
        <Row>
          <Col xs='12' md='12'>
            <Col xs='12' md='12'>
              <Input
                type={'text'}
                label={'Email Address'}
                name={'email'}
                placeholder={'Please Enter Your Email'}
                value={forgotFormData.email}
                onInputChange={(name, value) => {
                  forgotPasswordChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <hr />
              <Row className='forgot-password-actions'>
                <Col xs='6' md='6'>
                  <button
                    className='input-btn'
                    type='submit'
                    onClick={() => forgotPassowrd()}
                  >
                    Send Email
                  </button>
                </Col>
                <Col xs='6' md='6' className='text-right'>
                  <Link className='redirect-link' to={'/login'}>
                    Back to login
                  </Link>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authentication: state.firebase.auth,
    forgotFormData: state.forgotPassword.forgotFormData,
    forgotError: state.forgotPassword.forgotError
  };
};

export default connect(
  mapStateToProps,
  actions
)(ForgotPassword);
