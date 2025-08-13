import { useState } from "react";
import styles from "../styles/NumberGuess.module.css";
import NoGuessBg from "../assets/noGuessBg.png";

const NumberGuess = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [userNumber, setUserNumber] = useState("");
  const [result, setResult] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [attempts, setAttempts] = useState(0);

  function checkButton() {
    const guess = Number(userNumber);
    if (!guess && guess !== 0) return;

    setAttempts((prev) => prev + 1);
    setGuesses((prev) => [...prev, guess]);

    if (guess < 1 || guess > 100) {
      setResult(`🚫 ${guess} is not between 1 and 100.`);
    } else if (guess < randomNumber) {
      setResult(`⬇️ Your guess ${guess} is less than the number.`);
    } else if (guess > randomNumber) {
      setResult(`⬆️ Your guess ${guess} is greater than the number.`);
    } else {
      setResult(
        `🎯 Congratulations! You guessed the number in ${
          attempts + 1
        } attempts!`
      );
    }
    setUserNumber("");
  }

  function resetGame() {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setUserNumber("");
    setResult("");
    setGuesses([]);
    setAttempts(0);
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${NoGuessBg})` }}
    >
      <div className={styles.gameBox}>
        <h1 className={styles.title}>Number Guessing Game</h1>
        <h5 className={styles.subtitle}>Enter a number between 1 and 100</h5>

        <input
          type="number"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
          className={styles.input}
        />

        <div className={styles.btnGroup}>
          <button onClick={checkButton} className={styles.btnCheck}>
            Check
          </button>
          <button onClick={resetGame} className={styles.btnReset}>
            Reset
          </button>
        </div>

        {result && <div className={styles.resultBox}>{result}</div>}

        {guesses.length > 0 && (
          <div className={styles.guessList}>
            <h4>Previous Guesses:</h4>
            <ul>
              {guesses.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberGuess;
