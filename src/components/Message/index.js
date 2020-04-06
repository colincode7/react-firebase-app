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
      {error != null && (
        <Alert color={type}>
          <p>{error}</p>
        </Alert>
      )}
    </div>
  );
};

export default Message;
