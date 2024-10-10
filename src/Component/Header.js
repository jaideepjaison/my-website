import React from 'react';
import { Link, useLocation } from "react-router-dom";

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

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundImage: 'linear-gradient(to right, #2E3192, #29bbbb)' }}>
            <div className="container">
                <Link className="navbar-brand" style={{ fontWeight: 'bold', fontSize: '26px' }} to="/">𝓙𝓪𝓲𝓼𝓸𝓷𝓛𝓸𝓫𝓸</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleNavItemClick}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects" onClick={handleNavItemClick}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/my_cources" onClick={handleNavItemClick}>My Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/my_resume" onClick={handleNavItemClick}>My Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={handleNavItemClick}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
