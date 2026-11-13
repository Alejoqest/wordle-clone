import { useEffect, useState } from "react";
import { getData, updateData } from "../services/dataService";

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const mode = getData();
    if (!mode) return false;
    return mode.darkMode;
  });

  const changeDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    updateData({ darkMode });
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return { darkMode, changeDarkMode };
};

export default useTheme;
