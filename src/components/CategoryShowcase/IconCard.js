import React from "react";

const IconCard = ({ icon, label, onClick }) => {
  return (
    <div className="icon-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="icon-wrapper">
        <img src={icon} alt={label} className="icon" />
      </div>
      <div className="icon-label">{label}</div>
    </div>
  );
};

export default IconCard;