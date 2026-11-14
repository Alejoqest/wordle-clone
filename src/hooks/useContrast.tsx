import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getData, updateData } from "../services/dataService";

interface ContrastContextType {
  highContrast: boolean;
  changeContrast: () => void;
}

const ContrastContext = createContext<ContrastContextType | null>(null);

export const ContrastProvider = ({ children }: { children: ReactNode }) => {
  const [highContrast, setHighContrast] = useState(() => {
    const mode = getData();
    if (!mode) return false;
    return mode.highContrast;
  });

  const changeContrast = () => setHighContrast((prev) => !prev);

  useEffect(() => updateData({ highContrast }), [highContrast]);

  return (
    <ContrastContext.Provider value={{ highContrast, changeContrast }}>
      {children}
    </ContrastContext.Provider>
  );
};

const useContrast = () => {
  const context = useContext(ContrastContext);

  if (!context) {
    throw new Error("useContrast must be used within ContrastProvider");
  }

  return context;
};

export default useContrast;
