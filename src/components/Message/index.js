/**
 *
 * Message
 *
 */

import React from 'react';
import { Alert } from 'reactstrap';

const Message = props => {
  const { error, type } = props;

  return (
    <div className='message-box'>
      <Alert color={type}>
        <p>{error}</p>
      </Alert>
      <hr />
    </div>
  );
};

export default Message;
