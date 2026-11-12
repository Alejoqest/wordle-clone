import type { GameState } from "../types/game";
import type { Attempt } from "../types/word";
import AttemptRow from "./AttemptRow";
import CurrentRow from "./CurrentRow";
import ExtraRow from "./ExtraRow";

interface Props {
  attempts: Attempt[];
  value: string;
  error: boolean;
  gameState: GameState;
  handleError: () => void;
}

const GameBoard = ({
  attempts,
  value,
  gameState,
  error,
  handleError,
}: Props) => {
  const emptyRows = 5 - attempts.length;
  const win = gameState == "win";

  return (
    <div className="flex w-full justify-center">
      <div className="border-box grid h-90 w-75 grid-rows-6 gap-1 p-2.5">
        {attempts.map((v, vi, a) => (
          <AttemptRow
            key={vi}
            rowIndex={vi}
            attempt={v}
            win={win && vi + 1 == a.length}
          />
        ))}
        {attempts.length < 6 && (
          <CurrentRow value={value} error={error} handleError={handleError} />
        )}
        {emptyRows > 0 &&
          Array.from({ length: emptyRows }, (_, row) => (
            <ExtraRow key={row} rowIndex={row} />
          ))}
      </div>
    </div>
  );
};

export default GameBoard;
