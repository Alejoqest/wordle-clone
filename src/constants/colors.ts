const presentColor = "bg-amber-300";
const presentContrast = "bg-sky-300"

const correctColor = "bg-green-400";
const correctContrast = "bg-orange-500";

export const keyColors = {
  unused: "bg-neutral-200 dark:bg-neutral-500",
  absent: "bg-neutral-400 dark:bg-neutral-700",
  present: presentColor,
  correct: correctColor,
};

export const tileColors = {
  unused: "",
  absent: "bg-neutral-400 dark:bg-neutral-700",
  present: presentColor,
  correct: correctColor,
};

export const tileContrast = {
  unused: "",
  absent: "bg-neutral-400 dark:bg-neutral-700",
  present: presentContrast,
  correct: correctContrast,
};

export const keyContrast  = {
  unused: "bg-neutral-200 dark:bg-neutral-500",
  absent: "bg-neutral-400 dark:bg-neutral-700",
  present: presentContrast,
  correct: correctContrast,
}