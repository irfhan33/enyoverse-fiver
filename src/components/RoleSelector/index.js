import React from "react";
import AgencyIcon from "../AgencyIcon";
import InfluencerIcon from "../InfluencerIcon";
import "./style.css";

const RoleSelector = ({ name, checked, onChange }) => {
  return (
    <label className={`partner-role ${checked ? "active" : ""}`}>
      <input type="radio" checked={checked} onChange={onChange} />

      {(name === "Influencer" || name === "influencer") && <InfluencerIcon />}
      {(name === "Agency" || name === "agency") && <AgencyIcon />}
      <h4>{name}</h4>
    </label>
  );
};

export default RoleSelector;
