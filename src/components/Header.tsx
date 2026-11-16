import { useState } from "react";
import OptionsIcon from "../icons/OptionsIcon";
import Button from "./Button";
import SettingsDialog from "./SettingsDialog";
import HelpIcon from "../icons/HelpIcon";
import InfoDialog from "./InfoDialog";

interface Props {
    numAttempts: number;
  hardMode: boolean;
  onHardMode: () => void;
}

const Header = ({numAttempts, hardMode, onHardMode}: Props) => {
  const [settings, setSettings] = useState(false);
  const [help, setHelp] = useState(false);

  const onSettings = () => setSettings(true);
  const offSettings = () => setSettings(false);

  const onHelp = () => setHelp(true);
  const offHelp = () => setHelp(false);

  return (
    <header className="box-content h-14 w-full border-b-2 border-neutral-300 dark:border-neutral-700">
      <div className="w-full px-6">
        <Button onClick={onSettings}>
          <OptionsIcon />
        </Button>
        <Button onClick={onHelp}>
          <HelpIcon />
        </Button>
      </div>
      <SettingsDialog open={settings} numAttempts={numAttempts} hardMode={hardMode} onHardMode={onHardMode} onExit={offSettings} />
      <InfoDialog open={help} onExit={offHelp} />
    </header>
  );
};

export default Header;
