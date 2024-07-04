import './my-cource.css'
import Card from './Card';
const My_cources = () => {
    const certifications = [
        {
          name: 'How to publish a website for free',
          image: 'https://img-c.udemycdn.com/course/750x422/5970544_8467_3.jpg',
          link: 'https://www.udemy.com/course/how-to-deploy-the-website-for-free/learn/lecture/43859252?kw=how+to+publish+a+website&src=sac#overview'
        },
       
      ];
    return ( 
        
        <>
        <header>
            <h1 className="my-cource">My Cources</h1>
            </header>
            <div className="card-container">
      {certifications.map((cert, index) => (
        <Card
          key={index}
          image={cert.image}
          title={cert.name}
          buttonLink={cert.link}
          buttonText="View Cource Here"
        />
      ))}
    </div>
    <div className='span-test'>
    <p className='slide'>Will upload new cources soon.....</p>
    </div>
            </>
     );
}
 
export default My_cources;