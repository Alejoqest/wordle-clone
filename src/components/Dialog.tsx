import { useEffect, useState, type ReactNode } from "react";
import ExitIcon from "../icons/ExitIcon";
import Button from "./Button";

interface Props {
  title: string;
  open: boolean;
  onExit: () => void;
  children: ReactNode;
}

const Dialog = ({ title, open, onExit, children }: Props) => {
  const [mounted, setMounted] = useState(open);

  useEffect(() => {
    if (open) {
      setMounted(true);
    }
  }, [open]);

  const handleAnimationEnd = () => {
    if (!open) {
      setMounted(false);
    }
  };

  if (!mounted) return null;

  const animate = open ? "animate-slide-in" : "animate-slide-out";

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 z-2000 flex h-full w-full items-center justify-center bg-white/50 p-0 max-sm:items-end dark:bg-black/50"
      onClick={onExit}
    >
      <div
        className={`relative z-2001 box-border max-h-full min-w-100 overflow-y-auto rounded-lg border border-neutral-300 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.2)] max-sm:w-full max-sm:rounded-b-none max-sm:border-b-0 sm:max-w-120 dark:border-neutral-800 dark:bg-stone-900 ${animate}`}
        onAnimationEnd={handleAnimationEnd}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-box w-full p-4">
          <div className="mb-4 w-full text-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="absolute top-2 right-2">
              <Button inactive onClick={onExit}>
                <ExitIcon />
              </Button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
