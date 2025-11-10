import './Footer.css';
import jllogo from '../Component/Jaisons_Photo/Jaison_Photo_2025.jpeg';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let mail = 'jaison3666@gmail.com';

    return (
        <>
            <body className='footer-body'>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                />
                <title>Footer</title>

                <footer>
                    <div className="footer-content">
                        <div className="footer-logos">
                            <Link to="/">
                                <img
                                    style={{ borderRadius: '50%', width: '50px', height: '60px' }}
                                    src={jllogo}
                                    className="spotify-logo"
                                />
                            </Link>
                        </div>
                        <div className="social-links">
                            <a
                                href="https://www.instagram.com/jaisonjaideeplobo?igsh=OWVsOHN3emxjY202"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/jaison.lobo.718?mibextid=kFxxJD"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://www.youtube.com/@codewithjaison367"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jaison-jaideep-lobo/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="https://github.com/jaideepjaison"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://www.udemy.com/user/jaison-jaideep-lobo/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 0L5.81 3.573v3.574l6.189-3.574l6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055c-1.428 0-2.947-.991-2.947-3.027v-7.878z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p style={{ marginRight: '0%' }}>
                            Mail:{' '}
                            <a
                                href={`mailto:${mail}`}
                                style={{
                                    textDecoration: 'none',
                                    color: '#59d102',
                                }}
                            >
                                {mail}
                            </a>
                        </p>
                        <div className="created-by">Created by Jaison Lobo
                        <Link to="/phone" className="hidden-phone-icon">
                            <i
                                className="fas fa-phone"
                                style={{
                                    fontSize: '1rem',
                                    color: 'rgba(0, 0, 0, 0.2)', // Makes it less visible
                                    cursor: 'pointer',
                                }}
                            ></i>
                        </Link>
                    </div>
                        <p>Copyright © {currentYear} All rights reserved</p>
                    </div>
                </footer>
            </body>
        </>
    );
};

export default Footer;