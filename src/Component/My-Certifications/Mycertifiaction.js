import './certificcate.css';
import angularimage from './angular.png';


const MyCertifications = () => {
  const certifications = [
    {
      name: 'Foundations of Web Development: CSS, Bootstrap, JS, React',
      image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-9831ce71-487c-4dd5-b0b3-fb6d0c703d38.jpg?v=1715335513000',
      link: 'https://www.udemy.com/certificate/UC-9831ce71-487c-4dd5-b0b3-fb6d0c703d38/'
    },
    {
      name: 'Java',
      image: 'images/certification2.jpg',
      link: 'https://www.hackerrank.com/certificates/d92141c4a7e8'
    },
    {
      name: 'Angular',
      image: {angularimage},
      link: 'https://www.hackerrank.com/certificates/f380050930eb'
    },
    {
      name: 'SQL',
      image: 'images/certification2.jpg',
      link: 'https://www.hackerrank.com/certificates/302e8703c27f'
    },
    {
      name: 'JavaScript',
      image: 'images/certification2.jpg',
      link: 'https://www.hackerrank.com/certificates/efc26681cfb3'
    },
    {
      name: 'Git Tutorials',
      image: 'images/certification2.jpg',
      link: 'https://verify.mygreatlearning.com/verify/QPLPMHXT'
    }
  ];

  return (
    <>
      <div className="container-new">
        <h1>My Certifications</h1>
        <div className="scrollable-container">
          <table className="certification-table">
            <thead>
              <tr>
                {/* <th>Image</th> */}
                <th>Name</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((cert, index) => (
                <tr key={index}>
                  {/* <td><img src={cert.image}  /></td> */}
                  <td>{cert.name}</td>
                  <td>
                    <a className='btn btn-success' href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MyCertifications;
