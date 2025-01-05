
import usu from '../assets/usu.jpeg'

interface BoxProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  dates: string;
  grad: string;
  major: string;
  gpa: string;
  content: [string];
}

const Box: React.FC<BoxProps> = ({ imageSrc, title, subtitle, dates, grad, major, gpa, content }) => {

  return (
    <div className="ed-box">
      <div>
        <h2 className="ed-box-title">{title}</h2>
        <h3 className="ed-box-subtitle">{subtitle}</h3>

        <p className="ed-experience-list">{dates} &nbsp; | &nbsp; {grad}</p>
        <p className="ed-experience-list">{major} - <strong>{gpa}</strong></p>

        <br></br>

        <ul className="ed-experience-list">
          {content.map((item) => {
            return (
              <li key={content.indexOf(item)}>{item}</li>
            )
          })}
        </ul>
      </div>
      <img src={imageSrc} alt={title} className="ed-box-image" />
    </div>
  );
};

function Education() {

    return (
      <>
        <h2 className="section-header">EDUCATION</h2>

        <div className="ed-box-container">
          <Box
            imageSrc={usu}
            title="Bachelor of Science"
            subtitle="Utah State University"
            dates="2022 - Present"
            grad="Expected Graduation: May 2025"
            major="Computer Science Major"
            gpa="3.98 GPA"
            content={[
            "Computer Science Dept.'s Scholar of the Year (2024-25)",
            "ACM-W President (2024-25), Vice President (2023-24)",
            "Miss College of Science (2024-25)",
            "Outstanding Junior in the CS Dept. (2023-24)",
            "Attending on full academic scholarship"
          ]}
          />
          <Box
            imageSrc={usu}
            title="Master of Computer Science"
            subtitle="Utah State University"
            dates="2024 - Present"
            grad="Expected Graduation: Dec 2027"
            major="Part Time Student"
            gpa="4.0 GPA"
            content={[
            "Began concurrently with Bachelor's degree",
            "Currently on hiatus for a year to focus on industry experience"
          ]}
          />
        </div>
      </>
    )
  }
  
  export default Education
  