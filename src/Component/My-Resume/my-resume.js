import './my-res.css'
import resume from './Jaison_Jaideep_Lobo_Resume.pdf';
const MyResume = () => {
    return (  
        <>
            <div class="container-resume">
        <header>
            <h2>Jaison Jaideep Lobo</h2>
            <p>Web Developer</p>
        </header>

        <section class="about">
            <h2>About Me</h2>
            <p>
                I am a passionate web developer with experience in creating dynamic and responsive web applications.
                I specialize in front-end development with skills in Java, Spring boot, Angular, MySql, JavaScript, and various frameworks.
            </p>
        </section>

        <section class="resume-download">
            <h2>Download My Resume</h2>
            <a href={resume} download="Jaison_Jaideep_Lobo_Resume.pdf" class="btn">Download Resume</a>
        </section>
    </div>
        </>
    );
}
 
export default MyResume;