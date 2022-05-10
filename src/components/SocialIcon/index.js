import React from "react";
import "./style.css";

const SocialIcon = ({ icon, name }) => {
  return (
    <div className="social-icon">
      <div>{icon}</div>
      <span>{name}</span>
    </div>
  );
};

export default SocialIcon;
