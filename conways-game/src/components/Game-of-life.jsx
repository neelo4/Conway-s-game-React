import React, { useState } from 'react';
import Cell from './Cell';
import Board from './Board';

const GameOfLife = () => {
  const [board, setBoard] = useState(Array(20).fill(Array(20).fill(false)));
  const [running, setRunning] = useState(false);

  const evolve = () => {
    if (running) {
      let newBoard = [];
      for (let i = 0; i < board.length; i++) {
        let row = [];
        for (let j = 0; j < board[i].length; j++) {
          let alive = 0;
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              if (x === 0 && y === 0) {
                continue;
              }
              let rowIndex = i + x;
              let colIndex = j + y;
              if (rowIndex >= 0 && rowIndex < board.length && colIndex >= 0 && colIndex < board[i].length) {
                if (board[rowIndex][colIndex]) {
                  alive++;
                }
              }
            }
          }
          if (board[i][j] && (alive === 2 || alive === 3)) {
            row.push(true);
          } else if (!board[i][j] && alive === 3) {
            row.push(true);
          } else {
            row.push(false);
          }
        }
        newBoard.push(row);
      }
      setBoard(newBoard);
      setTimeout(evolve, 100);
    }
  };

  const reset = () => {
    setBoard(Array(20).fill(Array(20).fill(false)));
  };

  const create = () => {
    let newBoard = [];
    for (let i = 0; i < 20; i++) {
      let row = [];
      for (let j = 0; j < 20; j++) {
        row.push(Math.random() < 0.5);
      }
      newBoard.push(row);
    }
    setBoard(newBoard);
  };

  const toggleLife = (i, j) => {
    let newBoard = [...board];
    newBoard[i][j] = !newBoard[i][j];
    setBoard(newBoard);
  };

  return (
    <div>
      <h1>Game of Life</h1>
      <div>
        {board.map((row, i) => (
          <div key={i}>
            {row.map((cell, j) => (
              <Cell
                key={j}
                isAlive={cell}
                toggleLife={() => {
                  setBoard(prevBoard => {
                    let newBoard = [...prevBoard];
                    newBoard[i][j] = !newBoard[i][j];
                    return newBoard;
                  });
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={create}>Create</button>
      <button onClick={reset}>Reset</button>
       <button onClick={() => {
setRunning(!running);
evolve();
}}
>
{running ? 'Stop' : 'Start'}
</button>
      
</div>

  );
            }
            export default GameOfLife;