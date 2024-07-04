import './Project.css';
import ND from './ND_image.png';
import st_roque from './st_logo.png';
import aiet from './Aiet-College.jpg';
const Project = () => {
    return ( 
        <>
        <header>
    <h1 className='titleProject'>My Projects</h1>
    </header>
    <section className="projects">
      <div class="project">
        <h3>Project 1 - July 2022- Present</h3>
        <a className='a-link' href="https://mmis.nd.gov/portals/wps/portal/EnterpriseHome">ND MMIS</a>
        <img src={ND} alt="Project 1 Image" />
      </div>

      <div className="project">
        <h3>Project 2 - Dec 2023 - March 2024</h3>
        <a href="https://www.neerudechurch.in">Neerude Church</a>
        <img className='a-link' src={st_roque} alt="Project 2 Image" />
      </div>

      <div className="project">
        <h3>Project 3 - Dec 2021 - June 2022</h3>
        <a href="https://saw-erp.in">AIET College ERP</a>
        <img className='a-link' src={aiet} alt="Project  Image" />
      </div>

      
    </section>

   
        </>
     );
}
 
export default Project;