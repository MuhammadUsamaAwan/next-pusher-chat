import MessageField from '@/components/MessageField';
import Messages from '@/components/Messages';

interface PageProps {
  params: {
    roomId: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { roomId } = params;

  return (
    <>
      <h1>Messages:</h1>
      <Messages roomId={roomId} />
      <MessageField roomId={roomId} />
    </>
  );
};

export default page;
