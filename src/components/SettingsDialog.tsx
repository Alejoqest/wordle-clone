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
  const options = [
    {
      title: "Hard Mode",
      subtitle: "Any revealed hints must be used in subsequent guesses",
      value: hardMode,
      handleChange: onHardMode,
      disabled: hardModeDisabled,
    },
    {
      title: "Dark Theme",
      value: darkMode,
      handleChange: changeDarkMode,
    },
    {
      title: "High Contrast Mode",
      subtitle: "Contrast and colorblindness improvements",
      value: highContrast,
      handleChange: changeContrast,
    },
  ];

  return (
    <Dialog title="Settings" open={open} onExit={onExit}>
      <section>
        {options.map((v) => (
          <>
            <div className="flex items-center justify-between py-4">
              <div className="pr-2">
                <h3 className="m-0">{v.title}</h3>
                {v.subtitle && <p className="m-0 text-xs">{v.subtitle}</p>}
              </div>
              <input
                type="checkbox"
                checked={v.value}
                onChange={v.handleChange}
                disabled={v.disabled}
              />
            </div>
            <hr />
          </>
        ))}
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
