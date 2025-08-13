import { useState } from "react";
import styles from "../styles/Cricket.module.css";
import Bat from "../assets/batt.jpg";
import Ball from "../assets/ball.jpg";
import Stump from "../assets/stump.png";

export default function Cricket() {
  const [score, setScore] = useState({ win: 0, loss: 0, tie: 0 });
  const [userMove, setUserMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("");

  function choiceGenerator() {
    const choices = ["Bat", "Ball", "Stump"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function userChoice(move) {
    const compChoice = choiceGenerator();
    let outcome = "";

    if (move === compChoice) {
      setScore((prev) => ({ ...prev, tie: prev.tie + 1 }));
      outcome = "It's a tie 🤝";
    } else if (
      (move === "Bat" && compChoice === "Ball") ||
      (move === "Ball" && compChoice === "Stump") ||
      (move === "Stump" && compChoice === "Bat")
    ) {
      setScore((prev) => ({ ...prev, win: prev.win + 1 }));
      outcome = "You win 🎉";
    } else {
      setScore((prev) => ({ ...prev, loss: prev.loss + 1 }));
      outcome = "Computer wins 😢";
    }

    setUserMove(move);
    setComputerMove(compChoice);
    setResult(outcome);
  }

  function resetGame() {
    setScore({ win: 0, loss: 0, tie: 0 });
    setUserMove("");
    setComputerMove("");
    setResult("");
  }

  const moveImages = {
    Bat: Bat,
    Ball: Ball,
    Stump: Stump,
  };

  return (
    <div className={styles.cricketContainer}>
      <h1 className={styles.title}>🏏 Bat Ball Stump</h1>
      <p className={styles.subtitle}>Choose your move!</p>

      <div className={styles.game}>
        {["Bat", "Ball", "Stump"].map((move) => (
          <button
            key={move}
            onClick={() => userChoice(move)}
            className={styles.choiceBtn}
          >
            <img src={moveImages[move]} alt={move} />
            <span>{move}</span>
          </button>
        ))}
      </div>

      {result && (
        <div className={styles.resultCard}>
          <div className={styles.choices}>
            <div>
              <h4>You</h4>
              <img src={moveImages[userMove]} alt={userMove} />
              <p>{userMove}</p>
            </div>
            <div>
              <h4>Computer</h4>
              <img src={moveImages[computerMove]} alt={computerMove} />
              <p>{computerMove}</p>
            </div>
          </div>
          <h3 className={styles.outcome}>{result}</h3>
          <p className={styles.score}>
            Wins: {score.win} | Losses: {score.loss} | Ties: {score.tie}
          </p>
          <button className={styles.resetBtn} onClick={resetGame}>
            Reset Game
          </button>
        </div>
      )}
    </div>
  );
}
