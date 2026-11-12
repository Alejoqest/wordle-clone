import TileRow from "./TileRow";

interface Props {
  rowIndex: number;
}

const ExtraRow = ({ rowIndex }: Props) => {
  return <TileRow values={[]} rowIndex={rowIndex} />;
};

export default ExtraRow;
