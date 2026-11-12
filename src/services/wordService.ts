const vowels = ["a", "e", "i", "o", "u", "y"];

export const validateWord = (word: string): string => {
  if (word.length < 5) return "Not enough letters";

  const letters = word.split("");

  if (letters.every((v) => v === letters[0])) return "Not in word list";

  if (!letters.some((v) => vowels.includes(v))) return "Not in word list";

  return "";
};

export const getWord = async () => {
  try {
    const response = await fetch(
      "https://random-words-api.kushcreates.com/api?language=en&category=wordle&type=lowercase&words=1",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch word");
    }

    const content = await response.json();
    return typeof content[0].word === "string" ? content[0].word : "";
  } catch {
    return "";
  }
};
