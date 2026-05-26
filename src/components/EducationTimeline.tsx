import './EducationTimeline.css';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description?: string;
  location?: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'Stanford University',
    year: '2018 - 2020',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.',
    location: 'California, USA'
  },
  {
    degree: 'Bachelor of Engineering',
    institution: 'MIT',
    year: '2014 - 2018',
    description: 'Major in Software Engineering with minor in Data Science.',
    location: 'Massachusetts, USA'
  },
  {
    degree: 'High School Diploma',
    institution: 'Central High School',
    year: '2012 - 2014',
    description: 'Science stream with focus on Mathematics and Physics.',
    location: 'New York, USA'
  }
];

function EducationTimeline() {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        <div className="timeline-line"></div>
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="timeline-marker"></div>
              <div className="content-card">
                <span className="year-badge">{item.year}</span>
                <h3 className="degree">{item.degree}</h3>
                <h4 className="institution">{item.institution}</h4>
                {item.location && (
                  <p className="location">
                    <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {item.location}
                  </p>
                )}
                {item.description && (
                  <p className="description">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationTimeline;
