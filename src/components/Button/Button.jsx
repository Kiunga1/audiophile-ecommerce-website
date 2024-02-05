/* eslint-disable react/prop-types */
// Button.js
import { useState } from 'react';
import './Button.css';

const Button = ({ backgroundColor, hoverColor }) => {
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

