interface Props {
  onClick: (reset: boolean) => void;
  loading: boolean;
}

const GameOptions = ({ onClick, loading }: Props) => {
  const onReset = () => onClick(true);

  return (
    <div className="m-auto flex h-50 w-full max-w-63 flex-col justify-center px-4 pb-4">
      <button
        className="h-11 cursor-pointer rounded-3xl border px-1.5 whitespace-nowrap disabled:cursor-not-allowed dark:bg-stone-900"
        onClick={onReset}
        disabled={loading}
      >
        New Game
      </button>
    </div>
  );
};

export default GameOptions;
