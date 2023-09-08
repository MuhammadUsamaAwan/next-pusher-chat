'use client';
import { pusherClient } from '@/lib/pusher';
import { FC, useEffect, useState } from 'react';

interface MessagesProps {
  roomId: string;
}

const Messages: FC<MessagesProps> = ({ roomId }) => {
  const [incomingMessages, setIncomingMessages] = useState<string[]>([]);

  useEffect(() => {
    pusherClient.subscribe(roomId);

    pusherClient.bind('incoming-message', (text: string) => {
      setIncomingMessages(prev => [...prev, text]);
    });

    return () => {
      pusherClient.unsubscribe(roomId);
    };
  }, [roomId]);

  return (
    <div>
      {incomingMessages.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
};

export default Messages;
