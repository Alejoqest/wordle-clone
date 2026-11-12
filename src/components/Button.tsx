import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  inactive?: boolean;
}

const Button = ({ children, onClick, inactive = false }: Props) => {
  const hover = !inactive
    ? "hover:bg-neutral-200 dark:hover:bg-neutral-700"
    : "";

  return (
    <button
      className={`cursor-pointer bg-white dark:bg-stone-900 ${hover} p-3`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
