import './MyCourses.css';
import img1 from '../../assets/images/courses/img1.png';
import Card from './Card';

const My_cources = () => {
  const certifications = [
    {
      name: 'How to publish a website for free',
      image: 'https://img-c.udemycdn.com/course/750x422/5970544_8467_3.jpg',
      link: 'https://www.udemy.com/course/how-to-deploy-the-website-for-free/'
    },
    {
      name: 'Weather App using React',
      image: img1,
      link: 'https://www.udemy.com/course/weather-application-using-react/'
    }
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <div className="courses-page-wrap">
        <header className="courses-header">
          <h1>My Courses</h1>
        </header>
        <div className="courses-grid">
          {certifications.slice(0).reverse().map((cert, index) => (
            <Card
              key={index}
              image={cert.image}
              title={cert.name}
              buttonLink={cert.link}
              buttonText="View Course Here"
            />
          ))}
        </div>
        <div className="course-alert-banner glass-card">
          <i className="fas fa-lightbulb course-alert-icon"></i>
          <p className="course-alert-text">
            <strong>More courses coming soon!</strong> I am currently developing rich, interactive courses covering high-performance React architectures, clean state paradigms, and advanced Java microservices.
          </p>
        </div>
      </div>
    </>
  );
};

export default My_cources;