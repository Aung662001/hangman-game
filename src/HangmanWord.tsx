type HangmanWordProps = {
  guessedLetter: string[];
  wordToGuess: string;
  revel: boolean;
};
export default function HangmanWord({
  guessedLetter,
  wordToGuess,
  revel = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".35rem",
        fontSize: "4rem",
        fontWeight: "bold",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: ".1em solid black",
          }}
        >
          <span
            style={{
              visibility:
                guessedLetter.includes(letter) || revel ? "visible" : "hidden",
              color: !guessedLetter.includes(letter) && revel ? "red" : "green",
            }}
          >
            {letter.toUpperCase()}
          </span>
        </span>
      ))}
    </div>
  );
}
