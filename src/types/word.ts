export interface Letter {
  value: string;
  state: LetterState;
}

export type LetterState = "unused" | "absent" | "present" | "correct";

export type Word = string[];

export type Attempt = Letter[];
