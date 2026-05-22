import React, { useState, useCallback } from 'react';
import './Main.css';
import jllogo from '../Component/Jaisons_Photo/Jaison_Photo_2026.jpeg';
import { Link } from 'react-router-dom';

const Main = () => {
  const [ripples, setRipples] = useState([]);

  const addRipple = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    
    setRipples((prev) => [...prev, newRipple]);
    
    // Remove ripple after 1 second
    setTimeout(() => {
      setRipples((prev) => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  }, []);

  return (
    <>
      <div className="portfolio" onPointerDown={addRipple}>
        <div className="background-image"></div>
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="water-ripple"
            style={{ left: ripple.x, top: ripple.y }}
          ></span>
        ))}
        <div className="content">
          <div className="profile-container">
            <img src={jllogo} alt="Jaison Lobo Profile" className="profile-photo" />
          </div>
          <div className="name-wrapper">
            <h1 className="name">Jaison Lobo</h1>
            <h6 className="desig">Software Engineer</h6>
          </div>
          <p className="description">
            I am a passionate software engineer with 4 years of experience in Full Stack web development and freelancing, dedicated to writing clean, optimized code and building highly premium web experiences.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn-primary-custom">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary-custom">
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;