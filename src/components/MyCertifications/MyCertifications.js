import './MyCertifications.css';

const MyCertifications = () => {
  const certifications = [
    {
      name: 'Foundations of Web Development: CSS, Bootstrap, JS, React',
      link: 'https://www.udemy.com/certificate/UC-9831ce71-487c-4dd5-b0b3-fb6d0c703d38/',
      meta: 'Udemy Verification'
    },
    {
      name: 'Java Problem Solving & Core Concepts',
      link: 'https://www.hackerrank.com/certificates/d92141c4a7e8',
      meta: 'HackerRank Skill Certification'
    },
    {
      name: 'Apache Kafka Event Streaming',
      link: 'https://www.linkedin.com/learning/certificates/ee7ce11055faece64588968c565444ac6aa3742492fb6afb3f59cccd86d120b9?accountId=2164202&u=2164202',
      meta: 'LinkedIn Learning Certification'
    },
    {
      name: 'Angular Development Standards',
      link: 'https://www.hackerrank.com/certificates/f380050930eb',
      meta: 'HackerRank Skill Certification'
    },
    {
      name: 'Structured Query Language (SQL)',
      link: 'https://www.hackerrank.com/certificates/302e8703c27f',
      meta: 'HackerRank Skill Certification'
    },
    {
      name: 'Advanced JavaScript Concepts',
      link: 'https://www.hackerrank.com/certificates/efc26681cfb3',
      meta: 'HackerRank Skill Certification'
    },
    {
      name: 'Git Version Control & Workflow Tutorials',
      link: 'https://verify.mygreatlearning.com/verify/QPLPMHXT',
      meta: 'Great Learning Verification'
    },
    {
      name: 'AWS Technical Essentials',
      link: 'https://www.linkedin.com/in/jaison-jaideep-lobo/overlay/Certifications/575501572/treasury/?profileId=ACoAACfrSagBwHCc2aZObkM24M4rypmcMOUb9Ck',
      meta: 'AWS Certification'
    }
  ];

  const getSourceDetails = (cert) => {
    const link = cert.link;
    const name = cert.name;
    
    if (name.includes('AWS') || cert.meta.includes('AWS')) {
      return { type: 'aws', label: 'AWS', icon: 'fab fa-aws' };
    }
    if (link.includes('udemy.com')) {
      return { type: 'udemy', label: 'Udemy', icon: 'fas fa-graduation-cap' };
    }
    if (link.includes('hackerrank.com')) {
      return { type: 'hackerrank', label: 'HackerRank', icon: 'fas fa-code' };
    }
    if (link.includes('linkedin.com')) {
      return { type: 'linkedin', label: 'LinkedIn', icon: 'fab fa-linkedin' };
    }
    return { type: 'other', label: 'Verified', icon: 'fas fa-award' };
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <div className="certifications-page-wrap">
        <header className="cert-header-custom">
          <h1>My Certifications</h1>
        </header>
        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const src = getSourceDetails(cert);
            return (
              <article className="cert-card" key={index}>
                <div className="cert-icon-area">
                  <span className={`cert-badge-logo ${src.type}`}>
                    {src.label}
                  </span>
                  <i className={`${src.icon} cert-icon-graphic`}></i>
                </div>
                <div className="cert-content">
                  <h3 className="cert-name">{cert.name}</h3>
                  <span className="cert-meta-info">{cert.meta}</span>
                </div>
                <a
                  className="cert-link-custom"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify Certificate <i className="fas fa-external-link-alt" style={{ fontSize: '0.8rem' }}></i>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyCertifications;
