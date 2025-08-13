import React, { useState } from "react";
import styles from "../styles/ConnectFour.module.css";
import ConnectFourBg from "../assets/colorfulBg.jpg";

const ROWS = 6;
const COLS = 7;

const ConnectFour = () => {
  const [board, setBoard] = useState(
    Array(ROWS)
      .fill(null)
      .map(() => Array(COLS).fill(null))
  );
  const [player, setPlayer] = useState("red");
  const [winner, setWinner] = useState(null);

  const dropDisc = (col) => {
    if (winner) return;

    const newBoard = board.map((row) => [...row]);

    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = player;
        setBoard(newBoard);
        if (checkWin(newBoard, row, col, player)) {
          setWinner(player);
        } else {
          setPlayer(player === "red" ? "yellow" : "red");
        }
        break;
      }
    }
  };

  const checkWin = (b, row, col, color) => {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ];

    for (let [dx, dy] of directions) {
      let count = 1;

      let r = row + dx,
        c = col + dy;
      while (r >= 0 && r < ROWS && c >= 0 && c < COLS && b[r][c] === color) {
        count++;
        r += dx;
        c += dy;
      }

      r = row - dx;
      c = col - dy;
      while (r >= 0 && r < ROWS && c >= 0 && c < COLS && b[r][c] === color) {
        count++;
        r -= dx;
        c -= dy;
      }

      if (count >= 4) return true;
    }
    return false;
  };

  const resetGame = () => {
    setBoard(
      Array(ROWS)
        .fill(null)
        .map(() => Array(COLS).fill(null))
    );
    setPlayer("red");
    setWinner(null);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${ConnectFourBg})` }}
    >
      <h1>Connect Four</h1>
      <h2 className={styles.status}>
        {winner
          ? `${winner.toUpperCase()} Wins! 🎉`
          : `Turn: ${player.toUpperCase()}`}
      </h2>

      <button className={styles.resetBtn} onClick={resetGame}>
        Restart
      </button>

      <div className={styles.board}>
        {board.map((row, rIdx) => (
          <div key={rIdx} className={styles.row}>
            {row.map((cell, cIdx) => (
              <div
                key={cIdx}
                className={styles.cell}
                onClick={() => dropDisc(cIdx)}
              >
                {cell && (
                  <div
                    className={styles.disc}
                    style={{ backgroundColor: cell }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectFour;
