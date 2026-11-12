import type { Attempt } from "./word";

export interface Key {
  type: "normal" | "enter" | "delete";
  label: string;
  value?: string;
}

export type InputState = "normal" | "win" | "error";

export type GameState = "start" | "process" | "win" | "loss";

export interface MessageType {
  msg: string;
  index: string;
}

export interface Data {
  word: string;
  attempts: Attempt[];
  state: GameState;
  darkMode: boolean;
}

export interface GameData {
  word: string;
  attempts: Attempt[];
  state: GameState;
}

export interface DataEdit {
  word?: string;
  attempts?: Attempt[];
  state?: GameState;
  darkMode?: boolean;
}
