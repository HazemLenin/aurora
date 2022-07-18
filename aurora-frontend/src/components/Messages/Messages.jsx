import React from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';

function Messages() {
  const messages = useSelector(state => state.messages);
  
  return <>
    {messages.map((message, i) => {
      return <Message key={i} isFirst={i === 0} variant={message.variant} message={message.title} />
    })}
  </>
}

export default Messages