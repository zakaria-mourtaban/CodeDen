import React from "react";
import "./Input.css";

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
