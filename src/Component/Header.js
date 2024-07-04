import React from 'react';
import Project from './Project/Project';
import { Link } from "react-router-dom";
import App from '../App';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundImage: 'linear-gradient(to right, #2E3192, #29bbbb)' }}>
        <div className="container">
          <Link className="navbar-brand" style={{ fontWeight: 'bold',fontSize:'26px' }} to="">JaisonLobo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my_cources">My Cources</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     

      
      
    );
  }
  
export default Header;