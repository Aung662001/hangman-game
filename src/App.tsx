import { KeyboardEventHandler, useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import Hangmandrawing from "./Hangmandrawing";
import HangmanWord from "./HangmanWord";
import Keyboard, { KEYS } from "./Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [guessLetter, setGuessLetter] = useState<string[]>([]);
  const [wordToGuess, setWordToGuess] = useState(getWord());
  const incorrectLetters = guessLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessLetter.includes(letter));

  const addGuessLetter = useCallback(
    (letter: string) => {
      console.log(letter);
      if (guessLetter.includes(letter) || isLoser || isWinner) return;
      setGuessLetter((currentLetters) => [...currentLetters, letter]);
    },
    [guessLetter, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      e.preventDefault();
      let key = e.key;
      if (key != "Enter") {
        if (KEYS.includes(key)) {
          addGuessLetter(key);
        }
      } else if (key === "Enter") {
        e.preventDefault();
        setWordToGuess(getWord());
        setGuessLetter([]);
      } else {
        return;
      }
      // if (key != "Enter") return;
    };
    console.log(guessLetter);
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessLetter]);

  console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto ",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center", fontWeight: "500" }}>
        {isLoser ? (
          <div style={{ color: "red" }}>
            <b>OOP! Press Enter To Try Again</b>
          </div>
        ) : (
          ""
        )}
        {isWinner ? (
          <div style={{ color: "green" }}>You Win-Press Enter for NextGame</div>
        ) : (
          ""
        )}
      </div>
      <Hangmandrawing numberOfguess={incorrectLetters.length} />
      <HangmanWord
        guessedLetter={guessLetter}
        wordToGuess={wordToGuess}
        revel={isLoser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disable={isLoser || isWinner}
          activeLetter={guessLetter.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inActiveLetter={incorrectLetters}
          addGuessLetter={addGuessLetter}
        />
      </div>
    </div>
  );
}

export default App;
