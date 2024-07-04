import React from 'react';
import './my-cource.css';

const Card = ({ image, title, buttonLink, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="card-button">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;
