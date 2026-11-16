import type { ApiResponse } from "../types/game";

const vowels = ["a", "e", "i", "o", "u", "y"];

const FALLBACK_WORD = "words";

const getRandom = <T>(arr: T[]): T | undefined =>
  arr[Math.floor(Math.random() * arr.length)];

export const validateWord = (word: string): string => {
  if (word.length < 5) return "Not enough letters";

  const letters = word.split("");

  if (letters.every((v) => v === letters[0])) return "Not in word list";

  if (!letters.some((v) => vowels.includes(v))) return "Not in word list";

  return "";
};

export const getWord = async (): Promise<string> => {
  try {
    const response = await fetch("/words.json");

    if (!response.ok) throw new Error("Failed to fetch word");

    const content: ApiResponse = await response.json();

    if (!content.words.length) throw new Error("Empty Array");

    const word = getRandom(content.words);

    return typeof word === "string" ? word : FALLBACK_WORD;
  } catch {
    return FALLBACK_WORD;
  }
};
