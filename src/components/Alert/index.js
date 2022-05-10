import React from "react";
import AlertIcon from "../AlertIcon";
import "./styles.css";

const Alert = ({ children }) => {
  return (
    <div className="alert">
      <AlertIcon />
      <p>{children}</p>
    </div>
  );
};

export default Alert;
