import React from "react";
import "./style.css";

const Textarea = ({ ...rest }) => {
  return <textarea className="textarea primary" {...rest} />;
};

export default Textarea;
