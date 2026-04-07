import React from "react";
import "./Card.css";

const Card = ({ title, content, image, variant = "default", shadow = true }) => {
  return (
    <div className={`card card-${variant} ${shadow ? "card-shadow" : ""}`}>
      {image && <img src={image} alt={title} className="card-image" />}
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;