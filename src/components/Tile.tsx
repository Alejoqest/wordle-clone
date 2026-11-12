import { tileColors } from "../constants/colors";
import type { LetterState } from "../types/word";

interface Props {
  value: string;
  state: LetterState;
  win?: boolean;
  index: number;
}

const getDelay = (index: number) => {
  return { animationDelay: `${index * 100}ms` };
};

const Tile = ({ value, state, win, index }: Props) => {
  const border = state == "unused" ? "border-2" : "";
  const color = border
    ? "text-black dark:text-white"
      : "text-white";
  const animation = win
    ? "animate-bouncing"
    : state !== "unused"
      ? "animate-flip-in-out"
      : "";
  const colorBorder =
    border && value !== ""
      ? "border-black dark:border-neutral-600 animate-pop-in"
      : "border-neutral-300 dark:border-neutral-700";

  return (
    <div style={getDelay(index)} className={animation}>
      <span
        className={`flex h-full w-full items-center justify-center text-2xl font-black ${color} uppercase ${border} ${colorBorder} ${tileColors[state]} select-none`}
      >
        {value}
      </span>
    </div>
  );
};

export default Tile;
