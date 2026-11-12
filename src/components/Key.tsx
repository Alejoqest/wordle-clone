import { keyColors } from "../constants/colors";
import type { LetterState } from "../types/word";

interface Props {
  label: string;
  state: LetterState;
  larger?: boolean;
  onPress: () => void;
}

const Key = ({ label, state, larger, onPress }: Props) => {
  const color = state == "unused" ? "text-black dark:text-white" : "text-white";
  const length = !larger ? "flex-1" : "flex-[1.5]";
  const fontSize = label == "ENTER" ? "text-xs" : "text-lg";

  return (
    <button
      onClick={onPress}
      className={`mr-1.5 h-14.5 font-bold ${color} rounded-md ${length} ${fontSize} cursor-pointer ${keyColors[state]} select-none`}
    >
      {label}
    </button>
  );
};

export default Key;
