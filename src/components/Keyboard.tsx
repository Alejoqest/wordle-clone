import { keys } from "../constants/keyboard";
import useContrast from "../hooks/useContrast";
import type { Letter } from "../types/word";
import LetterKey from "./LetterKey";
import OperationKey from "./OperationKey";

interface Props {
  letters: Letter[];
  onInput: (value: string) => void;
  onEnter: () => void;
  onDelete: () => void;
}

const Keyboard = ({ letters, onInput, onEnter, onDelete }: Props) => {
  const {highContrast} = useContrast();
  const getState = (value: string) => {
    const letter = letters.find((v) => v.value == value);
    return letter ? letter.state : "unused";
  };

  const addSpace = (value: number) => {
    if (value == 1) {
      return <div className="h-14.5 flex-[0.5]" />;
    }
  };

  return (
    <div className="h-50 w-full">
      {keys.map((v, ri) => (
        <div key={`row-${ri}`} className="mb-1.5 flex w-full justify-center">
          {addSpace(ri)}
          {v.map((k, ci) =>
            k.type == "normal" ? (
              <LetterKey
                key={`btn-${ri}-${ci}`}
                label={k.label}
                value={k.value!}
                onInput={onInput}
                state={getState(k.value!)}
                contrast={highContrast}
              />
            ) : (
              <OperationKey
                key={`btn-${ri}-${ci}`}
                label={k.label}
                onPress={k.type == "enter" ? onEnter : onDelete}
              />
            ),
          )}
          {addSpace(ri)}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
