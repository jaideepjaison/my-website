import React from 'react';
import './my-cource.css';

const Card = ({ image, title, buttonLink, buttonText }) => {
  return (
    <article className="course-card-custom">
      <div className="course-img-container">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="course-info">
        <h3 className="course-title-custom">{title}</h3>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="course-btn-custom"
        >
          {buttonText} <i className="fas fa-external-link-alt" style={{ fontSize: '0.8rem' }}></i>
        </a>
      </div>
    </article>
  );
};

export default Card;
