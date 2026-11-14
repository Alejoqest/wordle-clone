import type { Data, DataEdit } from "../types/game";
import type { Attempt } from "../types/word";

const EMPTYDATA: Data = {
  word: "",
  attempts: [],
  state: "start",
  darkMode: false,
  highContrast: false,
};

export const getData = (): Data => {
  const item = localStorage.getItem("gameData");
  if (!item) return EMPTYDATA;
  const data: Data = JSON.parse(item);
  return data;
};

export const setDataMode = (darkMode: boolean) => {
  const data = getData() || { darkMode };
  setData(data);
};

export const setDataAttempts = (attempts: Attempt[]) => {
  const data = getData() || ({ attempts } as DataEdit);
  setData(data);
};

export const updateData = (data: DataEdit) => {
  const item = getData();
  const d = item ? { ...item, ...data } : data;
  setData(d);
};

export const setData = (data: DataEdit) => {
  localStorage.setItem("gameData", JSON.stringify(data));
};
