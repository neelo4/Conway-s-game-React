import React from 'react';

const Cell = ({ isAlive, toggleLife }) => (
  <section className='cells'
    style={{
      width: '40px',
      height: '20px',
      backgroundColor: !isAlive ? 'black' : 'white',
      border: '1px solid black',
      display: 'inline-block'
    }}
    onClick={toggleLife}
  />
);

export default Cell;
