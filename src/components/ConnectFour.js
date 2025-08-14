import React, { useState } from "react";
import styles from "../styles/ConnectFour.module.css";

export default function ConnectFour() {
  const rows = 6;
  const cols = 7;
  const emptyBoard = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(null));

  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);

  const dropDisc = (col) => {
    if (winner) return;

    const newBoard = board.map((row) => [...row]);

    for (let r = rows - 1; r >= 0; r--) {
      if (!newBoard[r][col]) {
        newBoard[r][col] = currentPlayer;
        break;
      }
    }

    setBoard(newBoard);

    const result = checkWinner(newBoard, currentPlayer);
    if (result) {
      setWinner(currentPlayer);
      setWinningCells(result);
    } else {
      setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
    }
  };

  const checkWinner = (board, player) => {
    const checkLine = (cells) => {
      if (cells.every(([r, c]) => board[r][c] === player)) {
        return cells;
      }
      return null;
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols - 3; c++) {
        const line = checkLine([
          [r, c],
          [r, c + 1],
          [r, c + 2],
          [r, c + 3],
        ]);
        if (line) return line;
      }
    }

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows - 3; r++) {
        const line = checkLine([
          [r, c],
          [r + 1, c],
          [r + 2, c],
          [r + 3, c],
        ]);
        if (line) return line;
      }
    }

    for (let r = 0; r < rows - 3; r++) {
      for (let c = 0; c < cols - 3; c++) {
        const line = checkLine([
          [r, c],
          [r + 1, c + 1],
          [r + 2, c + 2],
          [r + 3, c + 3],
        ]);
        if (line) return line;
      }
    }

    for (let r = 3; r < rows; r++) {
      for (let c = 0; c < cols - 3; c++) {
        const line = checkLine([
          [r, c],
          [r - 1, c + 1],
          [r - 2, c + 2],
          [r - 3, c + 3],
        ]);
        if (line) return line;
      }
    }

    return null;
  };

  const restartGame = () => {
    setBoard(emptyBoard);
    setCurrentPlayer("red");
    setWinner(null);
    setWinningCells([]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎯 Connect Four</h1>

      <div
        className={styles.status}
        style={{
          color: winner
            ? "#4CAF50"
            : currentPlayer === "red"
            ? "#ff4d4d"
            : "#FFD700",
        }}
      >
        {winner
          ? `🎉 Winner: ${winner.toUpperCase()}!`
          : `Current Turn: ${currentPlayer.toUpperCase()}`}
      </div>

      <button onClick={restartGame} className={styles.resetBtn}>
        🔄 Restart Game
      </button>

      <div className={styles.board}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isWinningCell = winningCells.some(
              ([r, c]) => r === rowIndex && c === colIndex
            );
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={styles.cell}
                onClick={() => dropDisc(colIndex)}
              >
                {cell && (
                  <div
                    className={`${styles.disc} ${
                      cell === "red" ? styles.red : styles.yellow
                    } ${
                      isWinningCell
                        ? cell === "red"
                          ? styles.glowRed
                          : styles.glowYellow
                        : ""
                    }`}
                  />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
