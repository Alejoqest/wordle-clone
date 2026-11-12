import TileRow from "./TileRow";

interface Props {
  value: string;
  error: boolean;
  handleError: () => void;
}

const CurrentRow = ({ value, error, handleError }: Props) => {
  return (
    <TileRow values={value.split("")} error={error} handleError={handleError} />
  );
};

export default CurrentRow;
