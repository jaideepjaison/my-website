import './Main.css';
import jllogo from '../Component/Jaisons_Photo/Jaison_Photo_2026.jpeg';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className="portfolio">
        <div className="background-image"></div>
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