import React from "react";
import "./Button.css";

const Button = ({ onClick, children, type = "button", className="button" }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
