import React from "react";
import './Button.css'

const Button = ({title, onClick, color, textColor}) => {
 
  return (
    <button 
      style={{ backgroundColor: color, color: textColor }}
      onClick={onClick} className='btn'
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
 
  textColor: "white"
};


export default Button;
