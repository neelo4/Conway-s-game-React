import React from 'react';
import Cell from './Cell';

const Board = ({ board, toggleLife }) => (
  <div style={{ width: "100%" }}>
    {board.map((row, i) => (
      <div key={i}>
        {row.map((cell, j) => (
          <Cell
            key={j}
            isAlive={cell}
            toggleLife={() => toggleLife(i, j)}
            style={{ width: `${100 / board[0].length}%` }}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Board;
