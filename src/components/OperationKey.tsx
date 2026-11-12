import Key from "./Key";

interface Props {
  label: string;
  onPress: () => void;
}

const OperationKey = ({ label, onPress }: Props) => {
  return <Key label={label} state="unused" larger onPress={onPress} />;
};

export default OperationKey;
