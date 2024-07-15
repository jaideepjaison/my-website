import './Contact.css'
const Conatct = () => {
    let mail='jaison3666@gmail.com';
    return ( 
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
    <header className='header-conatct'>
      <h1 className='dev_contact'>Developer Conatct</h1>
    </header>
        <div style={{height: '60vh',placeContent:'center'}}>
    <main className='.main-conatct'>
      <div class="background-image"></div>
      <div class="content-contact">
        <img src="../PhotoJL.png" alt="Profile Photo" class="profile-photo" />
        <h5>If any freelacing project or any other thingsthere please connect with me here 👇</h5>
        <div className="social-links-conatct">
        <a href="https://www.instagram.com/jaisonjaideeplobo?igsh=OWVsOHN3emxjY202" target='_blank'><i className="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/jaison-jaideep-lobo/" target='_blank'><i className="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/jaideepjaison" target='_blank'><i className="fab fa-github"></i></a> 
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
 
export default Conatct;