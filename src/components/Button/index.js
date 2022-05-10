import React from "react";
import "./style.css";

const Button = ({ children, variant = "primary", ...rest }) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
