import type { LetterState } from "../types/word";
import Key from "./Key";

interface Props {
  label: string;
  value: string;
  state: LetterState;
  contrast: boolean;
  onInput: (value: string) => void;
}

const LetterKey = ({ label, value, state, contrast, onInput }: Props) => {
  const onPress = () => {
    onInput(value);
  };

  return <Key label={label} state={state} contrast={contrast} onPress={onPress} />;
};

export default LetterKey;
