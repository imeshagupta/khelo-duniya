import { useState, useEffect } from "react";
import styles from "../styles/ClickCounter.module.css";
import ClickCounterBG from "../assets/clickCounterBg.jpg";

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  function startGame() {
    setCount(0);
    setTimeLeft(10);
    setIsPlaying(true);
  }

  function handleClick() {
    if (isPlaying) {
      setCount((prev) => prev + 1);
    }
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${ClickCounterBG})` }}
    >
      <div className={styles.card}>
        <h1 className={styles.title}>⏱ Click Counter Challenge</h1>
        <p className={styles.subtitle}>
          Click the button as many times as possible in <b>10 seconds!</b>
        </p>

        <div className={styles.stats}>
          <span className={styles.timer}>⏳ Time Left: {timeLeft}s</span>
          <span className={styles.clicks}>🖱 Clicks: {count}</span>
        </div>

        <div className={styles.buttons}>
          <button
            className={styles.clickBtn}
            onClick={handleClick}
            disabled={!isPlaying}
          >
            Click Me!
          </button>

          <button className={styles.startBtn} onClick={startGame}>
            {isPlaying ? "Restart" : "Start Game"}
          </button>
        </div>

        {!isPlaying && timeLeft === 0 && (
          <h3 className={styles.result}>
            🎉 Time’s up! Your score: <b>{count}</b>
          </h3>
        )}
      </div>
    </div>
  );
}
