import type { LetterState } from "../types/word";
import Key from "./Key";

interface Props {
  label: string;
  value: string;
  state: LetterState;
  onInput: (value: string) => void;
}

const LetterKey = ({ label, value, state, onInput }: Props) => {
  const onPress = () => {
    onInput(value);
  };

  return <Key label={label} state={state} onPress={onPress} />;
};

export default LetterKey;
