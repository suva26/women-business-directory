import React from "react";
import "./BusinessCard.css";

const BusinessCard = ({ business }) => {
  return (
    <div className="business-card">
      <h3>{business.name}</h3>
      <p>{business.category}</p>
      <p>📍 {business.location}</p>
      <p>📞 {business.contact}</p>
    </div>
  );
};

export default BusinessCard;
