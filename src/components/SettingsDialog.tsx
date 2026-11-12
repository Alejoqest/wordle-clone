import { useEffect, useState } from "react";
import Dialog from "./Dialog";
import { getData, updateData } from "../services/dataService";

interface Props {
  open: boolean;
  onExit: () => void;
}

const SettingsDialog = ({ open, onExit }: Props) => {
  const [darkMode, setDarkMode] = useState(() => {
    const mode = getData();
    if (!mode) return false;
    return mode.darkMode;
  });

  const changeDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    updateData({ darkMode });
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Dialog title="Settings" open={open} onExit={onExit}>
      <div>
        <div className="flex justify-between py-4">
          <h1>Dark Mode</h1>
          <input type="checkbox" checked={darkMode} onChange={changeDarkMode} />
        </div>
        <hr />
        <div className="flex justify-between py-2">
          <a href="https://github.com/Alejoqest" className="text-sm">
            Made by Alejoqest
          </a>
        </div>
      </div>
    </Dialog>
  );
};

export default SettingsDialog;
