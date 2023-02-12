import React from 'react';


const Cell = ({ isAlive, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: 20,
        height: 20,
        backgroundColor: isAlive ? '#6cbac8' : 'black',
        border: '1px solid #6a6a6a',
        display: 'inline-block',
      }}
    />
  );
};

export default Cell;
