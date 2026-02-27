import React from "react";
import "./style.scss";

const PriceRangeCard = ({ label = "Under", amount = "₹299", variant = "brown" }) => {
  return (
    <div className={`price-card ${variant}`}>
      <div className="price-inner" role="group" aria-label={`${label} ${amount}`}>
        <div className="label">{label}</div>
        <div className="amount">{amount}</div>
      </div>
    </div>
  );
};

export default PriceRangeCard;