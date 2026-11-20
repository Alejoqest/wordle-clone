import Dialog from "./Dialog";
import useTheme from "../hooks/useTheme";
import useContrast from "../hooks/useContrast";

interface Props {
  open: boolean;
  numAttempts: number;
  hardMode: boolean;
  onHardMode: () => void;
  onExit: () => void;
}

const SettingsDialog = ({
  open,
  numAttempts,
  hardMode,
  onHardMode,
  onExit,
}: Props) => {
  const hardModeDisabled = numAttempts > 0;
  const { darkMode, changeDarkMode } = useTheme();
  const { highContrast, changeContrast } = useContrast();

  return (
    <Dialog title="Settings" open={open} onExit={onExit}>
      <section>
        <div className="flex items-center justify-between py-4">
          <div>
            <h3>Hard Mode</h3>
            <p className="text-xs">
              Any revealed hints must be used in subsequent guesses
            </p>
          </div>
          <input
            type="checkbox"
            checked={hardMode}
            onChange={onHardMode}
            disabled={hardModeDisabled}
          />
        </div>
        <hr />
        <div className="flex items-center justify-between py-4">
          <div>
            <h3>Dark Mode</h3>
          </div>
          <input type="checkbox" checked={darkMode} onChange={changeDarkMode} />
        </div>
        <hr />
        <div className="flex items-center justify-between py-4">
          <div>
            <h3>High Contrast Mode</h3>
            <p className="text-xs">Contrast and colorblindness improvements</p>
          </div>
          <input
            type="checkbox"
            checked={highContrast}
            onChange={changeContrast}
          />
        </div>
        <hr />
        <div className="flex justify-between py-2">
          <a href="https://github.com/Alejoqest" className="text-sm">
            Made by Alejoqest
          </a>
        </div>
      </section>
    </Dialog>
  );
};

export default SettingsDialog;
