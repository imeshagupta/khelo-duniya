import { useState } from "react";
import styles from "../styles/FireWaterGun.module.css";
import Fire from "../assets/fire.png";
import Water from "../assets/water.png";
import Gun from "../assets/gun.jpg";

export default function FireWaterGun() {
  const [score, setScore] = useState({ win: 0, loss: 0, tie: 0 });
  const [userMove, setUserMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("");

  function choiceGenerator() {
    const choices = ["Fire", "Gun", "Water"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function userChoice(move) {
    const compChoice = choiceGenerator();
    let outcome = "";

    if (move === compChoice) {
      setScore((prev) => ({ ...prev, tie: prev.tie + 1 }));
      outcome = "It's a tie 🤝";
    } else if (
      (move === "Fire" && compChoice === "Gun") ||
      (move === "Gun" && compChoice === "Water") ||
      (move === "Water" && compChoice === "Fire")
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
    Fire: Fire,
    Gun: Gun,
    Water: Water,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🔥 Fire, Gun & Water 🔫💧</h1>
      <p className={styles.subtitle}>Choose your move!</p>

      <div className={styles.game}>
        {["Fire", "Gun", "Water"].map((move) => (
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
