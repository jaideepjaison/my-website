import './Footer.css';
import jllogo from './PhotoJL.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let mail='jaison3666@gmail.com';
    return ( 
        <>





<body className='footer-body'>
 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
  <title>Footer</title>
  
<footer>
  <div className="footer-content">
    <div className="footer-logos" to="">
    <Link to="/"><img style={{borderRadius:'50%'}} src={jllogo} className="spotify-logo"/></Link>
    </div>
    <div className="social-links">
      <a href="https://www.instagram.com/jaisonjaideeplobo?igsh=OWVsOHN3emxjY202" target='_blank'><i className="fab fa-instagram"></i></a>
      <a href="https://www.facebook.com/jaison.lobo.718?mibextid=kFxxJD" target='_blank'><i className="fab fa-facebook-f"></i></a>
      <a href="https://www.youtube.com/@codewithjaison367" target='_blank'><i className="fab fa-youtube"></i></a>
      <a href="https://www.linkedin.com/in/jaison-jaideep-lobo/" target='_blank'><i className="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/jaideepjaison" target='_blank'><i className="fab fa-github"></i></a> 
  </div>
       
  </div>
  <div>
  <p style={{ marginRight: '0%' }}>
  Mail : <a href={`mailto:${mail}`} style={{ textDecoration: 'none',color:'#59d102' }}>{mail}</a>
</p>
  <div className="created-by">Created by Jaison Lobo</div>
    <p>Copyright © {currentYear} All rights reserved</p>
  </div>
</footer>

</body>




        </>
     );
}
 
export default Footer;