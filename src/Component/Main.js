import './Main.css';
import jllogo from '../Component/Jaisons_Photo/Jaison_Photo_2025.jpeg';
const Main = () => {
    return ( <>
   <div className="portfolio">
    <div className="background-image"></div>
    <div className="content">
      <img src={jllogo} alt="Profile Photo" className="profile-photo" />
      <h1 className="name">Jaison Lobo<span className="cursor"></span></h1>
      <h6 className="desig">Software Engineer</h6>
      <p className="description">I am a passionate software engineer with 4 years of experience in Full Stack web development and Freelancing...</p>
    </div>
  </div>
    </> );
}
 
export default Main;