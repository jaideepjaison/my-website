import './Project.css';
import ND from './ND_image.png';
import st_roque from './st_logo.png';
import aiet from './Aiet-College.jpg';
import best_buy from './Best_Buy.jpg';

const Project = () => {
  const projectList = [
    {
      title: "Best Buy - Worksite App",
      duration: "Nov 2024 - Present",
      link: "https://www.bestbuy.com/",
      image: best_buy,
      description: "An enterprise-grade internal worksite application optimized for operations and team collaboration across stores.",
      tech: ["React.js", "TypeScript", "Microservices", "Bootstrap", "Git"]
    },
    {
      title: "North Dakota MMIS",
      duration: "July 2022 - Oct 2024",
      link: "https://mmis.nd.gov/portals/wps/portal/EnterpriseHome",
      image: ND,
      description: "A highly secure and robust Medicaid Management Information System designed for healthcare portal operations.",
      tech: ["Angular", "Java", "Spring Boot", "SQL", "Hibernate"]
    },
    {
      title: "Neerude Church Portal",
      duration: "Dec 2023 - March 2024",
      link: "https://www.neerudechurch.in",
      image: st_roque,
      description: "A customized content management platform built to keep the local community connected with parish announcements.",
      tech: ["PHP", "JavaScript", "HTML5", "Vanilla CSS", "MySQL"]
    },
    {
      title: "AIET College ERP",
      duration: "Dec 2021 - June 2022",
      link: "https://saw-erp.in",
      image: aiet,
      description: "A comprehensive institutional resource planning (ERP) system tracking grading, schedules, and student lifecycle details.",
      tech: ["Java", "SQL", "Hibernate", "Vanilla JS", "Git"]
    }
  ];

  return (
    <>
      <div className="projects-page-wrap">
        <header className="header-project-custom">
          <h1>My Selected Work</h1>
        </header>
        <main className="projects-main">
          <section className="projects-grid-custom">
            {projectList.map((proj, idx) => (
              <article className="project-card-custom" key={idx}>
                <div className="project-img-container">
                  <img src={proj.image} alt={proj.title} />
                  <span className="project-duration">{proj.duration}</span>
                </div>
                <div className="project-info-custom">
                  <h3 className="project-title-custom">{proj.title}</h3>
                  <p className="project-description-custom">{proj.description}</p>
                  <div className="project-tech-cloud">
                    {proj.tech.map((t, i) => (
                      <span className="project-tech-pill" key={i}>{t}</span>
                    ))}
                  </div>
                  <a href={proj.link} className="project-link-btn" target="_blank" rel="noopener noreferrer">
                    Visit Work <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </>
  );
};

export default Project;