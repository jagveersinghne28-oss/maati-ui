import React from "react";

const CategoryCard = ({ image, label, onClick, alt }) => {
  // handle keyboard activation for accessibility (Enter + Space)
  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === "Enter") {
      onClick();
    }
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault(); // prevent page scroll
      onClick();
    }
  };

  return (
    <div
      className="category-card"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={label}
    >
      <img src={image} alt={alt || label} className="card-image" />
      <div className="card-label">{label}</div>
    </div>
  );
};

export default CategoryCard;
