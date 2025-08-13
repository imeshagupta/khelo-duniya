import React, { useState } from "react";
import styles from "../styles/TicTacToe.module.css";
import TicTacToeBg from "../assets/tictactoeBG.jpg";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const winnerInfo = calculateWinner(board);
  const isDraw = !winnerInfo && board.every((cell) => cell !== null);

  function handleClick(index) {
    if (board[index] || winnerInfo || isDraw) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div
      className={styles.ticTacToe}
      style={{ backgroundImage: `url(${TicTacToeBg})` }}
    >
      <h1 className={styles.title}>Tic Tac Toe</h1>

      <div
        className={`${styles.status} ${
          winnerInfo ? styles.win : isDraw ? styles.draw : ""
        }`}
      >
        {winnerInfo
          ? `Winner: ${winnerInfo.player}`
          : isDraw
          ? "It's a Draw!"
          : `Next Player: ${isXTurn ? "X" : "O"}`}
      </div>

      <div className={styles.board}>
        {board.map((cell, i) => (
          <button
            key={i}
            className={`${styles.square} ${
              winnerInfo?.line.includes(i) ? styles.highlight : ""
            } ${cell === "O" ? styles.oMark : ""}`}
            onClick={() => handleClick(i)}
          >
            {cell}
          </button>
        ))}
      </div>

      <button className={styles.resetBtn} onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  return null;
}
