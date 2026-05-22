import './MyResume.css';
import resumePdf from '../../assets/documents/Jaison_Jaideep_Lobo_Resume.pdf';

const MyResume = () => {
  return (
    <>
      <div className="resume-page-wrap">
        <div className="resume-container-custom glass-card">
          <header className="resume-header">
            <h1>My Resume</h1>
          </header>
          <main className="resume-bio-card">
            <p>
              Hello, my name is <strong>Jaison Lobo</strong>. I am currently working as a 
              Software Engineer at Best Buy, specializing in building high-performance 
              Full Stack applications.
            </p>
            <p>
              With 4 years of professional software engineering and freelancing experience, 
              I have engineered reliable solutions across a diverse suite of technologies, 
              including JavaScript, React, Angular, Bootstrap, Java, Spring Boot, Microservices, 
              Apache Kafka, SQL, and Git.
            </p>
            <div className="resume-highlights">
              <span className="resume-highlight-badge">4+ Years Exp</span>
              <span className="resume-highlight-badge">Full Stack</span>
              <span className="resume-highlight-badge">Java & React Specialist</span>
            </div>
            <div className="resume-action-area">
              <a
                className="resume-dl-btn"
                href={resumePdf}
                download="Jaison_Jaideep_Lobo_Resume.pdf"
              >
                Download Resume <i className="fas fa-file-download"></i>
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MyResume;