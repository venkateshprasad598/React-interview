import React from "react";

const Button = ({ color, border, type }) => {
  return (
    <div>
      <h3>Hello from button</h3>
      <button style={{ color: color, border: border }}>{type}</button>
    </div>
  );
};

export default Button;
