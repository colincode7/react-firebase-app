/**
 *
 * Message
 *
 */

import React from 'react';

const Message = props => {
  const { error } = props;

  return (
    <div className='message-box'>
      <p>{error}</p>
      <hr />
    </div>
  );
};

export default Message;
