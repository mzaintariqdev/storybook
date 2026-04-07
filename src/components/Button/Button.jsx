import React from "react";
import "./Button.css";

const Button = ({ children, size = "medium", variant = "primary", disabled = false, onClick }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;