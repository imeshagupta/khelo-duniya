import { useState } from "react";
import styles from "../styles/RockPaperScissor.module.css";
import Rock from "../assets/rock.png";
import Paper from "../assets/paperr.png";
import Scissor from "../assets/scissor.png";

const RockPaperScissor = () => {
  const [score, setScore] = useState({ win: 0, loss: 0, tie: 0 });
  const [result, setResult] = useState("");
  const [userMove, setUserMove] = useState("");
  const [computerMove, setComputerMove] = useState("");

  const choiceGenerator = () => {
    const choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const userChoice = (move) => {
    const compChoice = choiceGenerator();
    let outcome = "";

    if (move === compChoice) {
      setScore((prev) => ({ ...prev, tie: prev.tie + 1 }));
      outcome = "It's a tie 🤝";
    } else if (
      (move === "Rock" && compChoice === "Scissor") ||
      (move === "Paper" && compChoice === "Rock") ||
      (move === "Scissor" && compChoice === "Paper")
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
  };

  const resetGame = () => {
    setScore({ win: 0, loss: 0, tie: 0 });
    setResult("");
    setUserMove("");
    setComputerMove("");
  };

  const moveImages = {
    Rock: Rock,
    Paper: Paper,
    Scissor: Scissor,
  };

  return (
    <div className={styles.rpsContainer}>
      <div className={styles.heading}>
        <h1 className="text-dark fs-1">Rock Paper Scissors</h1>
        <div className={styles.subHeading}>
          <p className={styles.subtitle}>Make your move!</p>
        </div>
      </div>

      <div className={styles.game}>
        {["Rock", "Paper", "Scissor"].map((move) => (
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
};

export default RockPaperScissor;
