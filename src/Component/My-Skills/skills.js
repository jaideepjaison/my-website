// /d:/Projects/React_Projects/my-website/src/Component/My-Skills/skills.js
import './skills.css';

const Skils = () => {
  const skills = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'Java', icon: '☕️' },
    { name: 'Spring Boot', icon: '🌿' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🟦' },
    { name: 'Microservices', icon: '🔧' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Hibernate', icon: '🐘' },
    { name: 'Git & GitHub', icon: '🐱' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kafka', icon: '☁️' }
  ];

  return (
    <div className="skills-wrap">
      <header className="skills-header">
        <h1>My Technology Skills</h1>
      </header>

      <main>
        <section className="technology-skills">
          <ul>
            {skills.map((s, i) => (
              <li
                key={s.name}
                className="skill"
                style={{ ['--i']: i }}
                aria-label={s.name}
              >
                <span className="icon" aria-hidden>
                  {s.icon}
                </span>
                <span className="label">{s.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Skils;