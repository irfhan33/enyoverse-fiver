import React from "react";
import "./styles.css";

const Chevron = () => {
  return (
    <svg
      className="chevron"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 1L8 8L1 1"
        stroke="#69768A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Select = ({ children, variant = "primary" }) => {
  return (
    <div className="select-container">
      <Chevron />
      <select className={`select ${variant}`}>{children}</select>
    </div>
  );
};

export default Select;
