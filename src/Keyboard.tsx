import { Key } from "react";
import styles from "./Keyboard.module.css";
export const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type KeyboardProps = {
  activeLetter: string[];
  disable?: boolean;
  inActiveLetter: string[];
  addGuessLetter: (letter: string) => void;
};
export default function Keyboard({
  disable = false,
  activeLetter,
  inActiveLetter,
  addGuessLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: ".5em",
        gridTemplateColumns: "repeat(auto-fit,minmax(60px,1fr))",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInActive = inActiveLetter.includes(key);
        return (
          <button
            disabled={isActive || isInActive || disable}
            onClick={() => addGuessLetter(key)}
            key={key}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }`}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
