import React from "react";
import "./styles.css";

const Input = ({ variant = "primary", children, ...rest }) => {
  return (
    <input className={`input ${variant}`} {...rest}>
      {children}
    </input>
  );
};

export default Input;
