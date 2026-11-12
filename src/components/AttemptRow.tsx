import type { Attempt } from "../types/word";
import TileRow from "./TileRow";

interface Props {
  rowIndex: number;
  attempt: Attempt;
  win: boolean;
}

const AttemptRow = ({ rowIndex, attempt, win }: Props) => {
  return (
    <TileRow
      rowIndex={rowIndex}
      values={attempt.map((a) => a.value)}
      states={attempt.map((a) => a.state)}
      win={win}
    />
  );
};

export default AttemptRow;
