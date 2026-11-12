import type { Attempt } from "../types/word";
import Dialog from "./Dialog";
import TileRow from "./TileRow";

interface Props {
  open: boolean;
  onExit: () => void;
}

const InfoDialog = ({ open, onExit }: Props) => {
  const firstRow: Attempt = [
    { value: "w", state: "correct" },
    { value: "o", state: "unused" },
    { value: "r", state: "unused" },
    { value: "d", state: "unused" },
    { value: "y", state: "unused" },
  ];

  const secondRow: Attempt = [
    { value: "l", state: "unused" },
    { value: "i", state: "present" },
    { value: "g", state: "unused" },
    { value: "h", state: "unused" },
    { value: "t", state: "unused" },
  ];

  const thirdRow: Attempt = [
    { value: "r", state: "unused" },
    { value: "o", state: "unused" },
    { value: "u", state: "unused" },
    { value: "g", state: "absent" },
    { value: "e", state: "unused" },
  ];

  return (
    <Dialog title="How To Play" open={open} onExit={onExit}>
      <div className="p-4">
        <h3 className="text-xl">Guess the Wordle in 6 tries</h3>
        <ul className="my-2 list-disc pl-6">
          <li>Each guess must be a valid 5-letter word.</li>
          <li>
            The color of the tiles will change to show how close your guess was
            to the word.
          </li>
        </ul>
        <h2 className="mb-3 font-bold">Examples</h2>
        <div className="mb-1 w-75">
          <TileRow
            values={firstRow.map((v) => v.value)}
            states={firstRow.map((v) => v.state)}
          />
        </div>
        <p className="mb-2">
          <b>W</b> is in the word and in the correct spot.
        </p>
        <div className="mb-1 w-75">
          <TileRow
            values={secondRow.map((v) => v.value)}
            states={secondRow.map((v) => v.state)}
          />
        </div>
        <p className="mb-2">
          <b>I</b> is in the word but in the wrong spot.
        </p>
        <div className="mb-1 w-75">
          <TileRow
            values={thirdRow.map((v) => v.value)}
            states={thirdRow.map((v) => v.state)}
          />
        </div>
        <p className="mb-2">
          <b>U</b> is not in the word in any spot.
        </p>
        <hr />
        <p className="my-2">You can try different words everytime you lose.</p>
      </div>
    </Dialog>
  );
};

export default InfoDialog;
