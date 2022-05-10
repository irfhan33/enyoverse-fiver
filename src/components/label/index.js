import React from "react";
import "./style.css";

const Label = ({ children, variant = "label" }) => {
  return <label className={variant}>{children}</label>;
};

export default Label;
