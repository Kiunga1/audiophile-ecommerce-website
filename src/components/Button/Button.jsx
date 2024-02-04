// Button.js
import React, { useState } from 'react';
import './Button.css';

const Button = ({ backgroundColor, hoverColor, children }) => {
  const [isHovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? hoverColor : backgroundColor,
  };

  return (
    <button
      className="button"
      style={buttonStyle}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      SEE PRODUCT
    </button>
  );
};

export default Button;

