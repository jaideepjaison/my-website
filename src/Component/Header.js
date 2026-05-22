import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';

const Header = () => {
    const location = useLocation();

    const handleNavItemClick = () => {
        const navbarCollapse = document.getElementById('navbarNav');
        const bootstrap = window.bootstrap;

        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    };

    React.useEffect(() => {
        handleNavItemClick();
    }, [location]);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
            <div className="container">
                <Link className="navbar-brand navbar-brand-custom" to="/">Jaison Lobo</Link>
                <button 
                    className="navbar-toggler navbar-toggler-custom" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link nav-link-custom ${isActive('/')}`} to="/" onClick={handleNavItemClick}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link nav-link-custom ${isActive('/projects')}`} to="/projects" onClick={handleNavItemClick}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link nav-link-custom ${isActive('/my_cources')}`} to="/my_cources" onClick={handleNavItemClick}>My Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link nav-link-custom ${isActive('/my_resume')}`} to="/my_resume" onClick={handleNavItemClick}>My Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link nav-link-custom ${isActive('/contact')}`} to="/contact" onClick={handleNavItemClick}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
