'use client';

import axios from 'axios';
import { FC, useState } from 'react';

interface MessageFieldProps {
  roomId: string;
}

const MessageField: FC<MessageFieldProps> = ({ roomId }) => {
  const [input, setInput] = useState('');

  const sendMessage = async (text: string) => {
    await axios.post('/api/message', { text, roomId });
    setInput('');
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        sendMessage(input || '');
      }}
      className='flex gap-2'
    >
      type a new message:
      <input
        value={input}
        onChange={({ target }) => setInput(target.value)}
        className='border border-zinc-300'
        type='text'
      />
      <button>send</button>
    </form>
  );
};

export default MessageField;
