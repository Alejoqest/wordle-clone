import type { MessageType } from "../types/game";
import Message from "./Message";

interface Props {
  list: MessageType[];
  onDelete: (index: string) => void;
}

const MessageList = ({ list, onDelete }: Props) => {
  if (list.length < 1) return null;

  return (
    <div className="absolute inset-x-0 z-500 mt-1 flex w-full justify-center gap-1 select-none">
      <div className="flex flex-col-reverse justify-center gap-1">
        {list.map((v) => (
          <Message key={v.index} message={v} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
