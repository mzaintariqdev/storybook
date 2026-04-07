import React from "react";
import "./Input.css";

const Input = ({ placeholder = "Type here...", value, onChange, type = "text", size = "medium" }) => {
  return (
    <input
      className={`input input-${size}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;