import { useEffect, useState } from "react";
import type { MessageType } from "../types/game";

interface Props {
  message: MessageType;
  onDelete: (index: string) => void;
}

const Message = ({ message, onDelete }: Props) => {
  const [build, setBuild] = useState(true);
  const animate = build ? "" : "animate-fade-out";

  useEffect(() => {
    setTimeout(() => setBuild(false), 1200);
  }, []);

  const handleDestruction = () => {
    onDelete(message.index);
  };

  return (
    <div
      className={`${animate} w-fit rounded-sm bg-black p-2 text-sm font-bold text-white dark:bg-white dark:text-black`}
      onAnimationEnd={handleDestruction}
    >
      {message.msg}
    </div>
  );
};

export default Message;
