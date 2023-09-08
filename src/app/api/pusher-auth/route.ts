import { pusherServer } from '@/lib/pusher';
import { randomUUID } from 'crypto';

export async function POST(req: Request) {
  const data = await req.text();
  const [socketId, channelName] = data.split('&').map(str => str.split('=')[1]);

  const id = randomUUID();

  const presenceData = {
    user_id: id,
    user_data: { user_id: id },
  };

  const auth = pusherServer.authorizeChannel(socketId, channelName, presenceData);

  return new Response(JSON.stringify(auth));
}
