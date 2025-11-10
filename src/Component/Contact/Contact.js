import './Contact.css';
import jllogo from '../Jaisons_Photo/Jaison_Photo_2025.jpeg';

const Contact = () => {
    let mail = 'jaison3666@gmail.com';
    return ( 
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
            <header className='header-conatct'>
                <h1 className='dev_contact'>Developer Contact</h1>
            </header>
            <div className="background_img" style={{height: '60vh', placeContent:'center'}}>
                <main className='main-conatct'>
                    <div className="background-image"></div>
                    <div className="content-contact">
                        <img src={jllogo} alt="Profile Photo" className="profile-photo" />
                        <h5 className='contact-msg'>If any freelancing project or any other thing there please connect with me here 👇</h5>
                        <div className="social-links-conatct">
                            <a href="https://www.instagram.com/jaisonjaideeplobo?igsh=OWVsOHN3emxjY202" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/jaison-jaideep-lobo/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/jaideepjaison" target='_blank' rel="noopener noreferrer"><i className="fab fa-github"></i></a> 
                        </div>
                        <p style={{ color: 'white' }}>
                            Mail : <a href={`mailto:${mail}`} style={{color:'white' }}>{mail}</a>
                        </p>
                    </div>
                </main>
            </div>
        </>
     );
}
 
export default Contact;