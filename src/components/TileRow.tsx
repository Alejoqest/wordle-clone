import { useEffect, useState } from "react";
import type { LetterState } from "../types/word";
import Tile from "./Tile";
import useContrast from "../hooks/useContrast";

const WORD_LENGTH = 5;

interface Props {
  rowIndex?: number;
  values: string[];
  states?: LetterState[];
  win?: boolean;
  error?: boolean;
  handleError?: () => void;
}

const TileRow = ({
  rowIndex,
  values,
  states,
  win,
  error,
  handleError,
}: Props) => {
  const { highContrast } = useContrast();
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    if (!win) return;
    setTimeout(() => setBounce(true), 900);
  }, [win]);

  const errorAni = error ? "animate-shake" : "";

  return (
    <div
      key={rowIndex && `row-${rowIndex}`}
      className={`grid grid-cols-5 gap-1 ${errorAni}`}
      onAnimationEnd={handleError}
    >
      {Array.from({ length: WORD_LENGTH }, (_, i) => (
        <Tile
          key={rowIndex ? `row-${rowIndex}-${i}` : `tile-${i}`}
          value={values[i] ?? ""}
          state={states?.[i] ?? "unused"}
          index={i}
          contrast={highContrast}
          win={bounce}
        />
      ))}
    </div>
  );
};

export default TileRow;
