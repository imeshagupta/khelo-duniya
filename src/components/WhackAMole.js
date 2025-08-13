import React, { useState, useEffect } from "react";
import Mole from "../assets/mole.jfif";
import Bg from "../assets/moleGroundBg.png";
import styles from "../styles/WhackAMole.module.css";

export default function WhackAMole() {
  const [moleIndex, setMoleIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
  };

  const whackMole = (index) => {
    if (index === moleIndex) {
      setScore((prev) => prev + 1);
      setMoleIndex(null);
    }
  };

  // Mole pops randomly
  useEffect(() => {
    if (!isPlaying) return;
    const moleInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 9);
      setMoleIndex(randomIndex);
    }, 800);
    return () => clearInterval(moleInterval);
  }, [isPlaying]);

  // Countdown timer
  useEffect(() => {
    if (!isPlaying) return;
    if (timeLeft === 0) {
      setIsPlaying(false);
      setMoleIndex(null);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isPlaying]);

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${Bg})` }}>
      <div className={styles.card}>
        <h1 className={styles.title}>Whack-a-Mole</h1>
        <div className={styles.stats}>
          <span>⏳ Time: {timeLeft}s</span>
          <span>🏆 Score: {score}</span>
        </div>

        {!isPlaying && (
          <button className={styles.startBtn} onClick={startGame}>
            Start Game
          </button>
        )}

        <div className={styles.grid}>
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className={styles.hole}
              onClick={() => whackMole(index)}
            >
              {moleIndex === index && (
                <img src={Mole} alt="mole" className={styles.mole} />
              )}
            </div>
          ))}
        </div>

        {!isPlaying && timeLeft === 0 && (
          <h2 className={styles.result}>🎉 Game Over! Your Score: {score}</h2>
        )}
      </div>
    </div>
  );
}
