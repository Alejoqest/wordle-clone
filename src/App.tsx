import { useEffect, useState } from "react";
import Keyboard from "./components/Keyboard";
import type { Attempt, Letter } from "./types/word";
import GameBoard from "./components/GameBoard";
import { type GameState, type MessageType } from "./types/game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameOptions from "./components/GameOptions";
import { getData, updateData } from "./services/dataService";
import { tileStates } from "./constants/states";
import MessageList from "./components/MessageList";
import { createMessage } from "./services/messageService";
import { winMessages } from "./constants/messages";
import { getWord, validateWord } from "./services/wordService";

function App() {
  const [word, setWord] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [state, setState] = useState<GameState>("start");
  const [letters, setLetters] = useState<Letter[]>([]);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [hardMode, setHardMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const data = getData();
    if (!data || data.word == "") {
      startGame();
      return;
    }
    setState(data.state);
    setWord(data.word);
    setAttempts(data.attempts);
  }, []);

  useEffect(() => {
    if (!word) return;
    updateData({ word, attempts, state, hardMode });
  }, [word, attempts, state, hardMode]);

  useEffect(() => {
    if (attempts.length === 6 && state === "process") {
      setState("loss");
      addMessage(word.toUpperCase());
    }
  }, [attempts, state]);

  useEffect(() => {
    if (attempts.length == 0) {
      setLetters([]);
      return;
    }

    setLetters((prev) => {
      const flat = [...prev, ...attempts.flat()];
      const filtered: Letter[] = flat.reduce((acc: Letter[], val) => {
        const exist = acc.findIndex((a) => a.value == val.value);
        if (exist == -1) {
          acc.push(val);
        } else if (tileStates[val.state] > tileStates[acc[exist].state]) {
          acc[exist] = val;
        }
        return acc;
      }, []);
      return filtered;
    });
  }, [attempts]);

  const startGame = async (reset?: boolean) => {
    setLoading(true);
    const data = await getWord();
    setWord(data);
    if (reset) {
      setAttempts([]);
      setValue("");
      setState("start");
      setError(false);
    }
    setLoading(false);
  };

  const onEnter = () => {
    if (!word) return;
    if (state == "win" || state == "loss") return;

    const errorMessage = validateWord(value);

    if (errorMessage) {
      addMessage(errorMessage);
      setError(true);
      return;
    }

    const split = value.split("");
    const target = word.split("");
    const hasWon = value === word;

    if (hardMode) {
      const rights = letters.filter((v) => v.state !== "absent");
      for (let i = 0; i < rights.length; i++) {
        if (!split.includes(rights[i].value)) {
          addMessage(`Guess must contain ${rights[i].value.toUpperCase()}`);
          setError(true);
          return;
        }
      }
    }

    const attempt: Attempt = split.map((v) => ({
      value: v,
      state: "absent",
    }));

    const remaining: string[] = [];

    split.forEach((v, i) => {
      if (v === target[i]) {
        attempt[i].state = "correct";
      } else {
        remaining.push(target[i]);
      }
    });

    split.forEach((v, i) => {
      if (attempt[i].state === "correct") return;
      const index = remaining.indexOf(v);
      if (index !== -1) {
        attempt[i].state = "present";
        remaining.splice(index, 1);
      }
    });

    if (hasWon) {
      setState("win");
      addMessage(winMessages[attempts.length]);
    }

    setAttempts((f) => [...f, attempt]);
    setValue("");
  };

  const onInput = (key: string) => {
    if (state == "start") setState("process");
    if (state == "win" || state == "loss") return;
    if (value.length >= 5) return;
    if (error) setError(false);
    const newValue = value + key;
    setValue(newValue);
  };

  const onDelete = () => {
    if (state == "win" || state == "loss") return;
    if (value.length == 0) return;
    const newValue = value.slice(0, -1);
    setValue(newValue);
  };

  const removeError = () => {
    setError(false);
  };

  const addMessage = (msg: string) => {
    setMessages((prev) => [...prev, createMessage(msg)]);
  };

  const removeMessage = (index: string) => {
    setMessages((prev) => {
      const newVer = prev.filter((v) => v.index !== index);
      return newVer;
    });
  };

  const changeHardMode = () => setHardMode((prev) => !prev);

  return (
    <div className="box-border min-h-screen dark:bg-stone-900 dark:text-white">
      <Header
        numAttempts={attempts.length}
        hardMode={hardMode}
        onHardMode={changeHardMode}
      />
      <MessageList list={messages} onDelete={removeMessage} />
      <main className="box-border flex justify-center">
        <div className="w-full max-w-125">
          <GameBoard
            attempts={attempts}
            value={value}
            gameState={state}
            error={error}
            handleError={removeError}
          />
          {state != "win" && state != "loss" ? (
            <Keyboard
              letters={letters}
              onEnter={onEnter}
              onInput={onInput}
              onDelete={onDelete}
            />
          ) : (
            <GameOptions onClick={startGame} loading={loading} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
