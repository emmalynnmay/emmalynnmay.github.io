
import usu from '../assets/usu-2.jpg'
import grad from '../assets/grad.jpeg'

interface BoxProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  dates: string;
  grad: string;
  major: string;
  gpa: string;
  content: string[];
}

const Box: React.FC<BoxProps> = ({ imageSrc, title, subtitle, dates, grad, major, gpa, content }) => {

  return (
    <div className="box">
      <img src={imageSrc} alt={title} className="box-image" />
      <h2 className="box-title">{title}</h2>
      <h3 className="box-subtitle">{subtitle}</h3>

      <p className="ed-experience-list">{dates} &nbsp; | &nbsp; {grad}</p>
      <p className="ed-experience-list">{major} - <strong>{gpa}</strong></p>

      <ul className="experience-list">
        {content.map((item) => {
          return (
            <li key={content.indexOf(item)}>{item}</li>
          )
        })}
      </ul>
    </div>
  );
};

function Education() {

    return (
      <>
        <h2 className="section-header">EDUCATION</h2>

        <div className="box-container">
          <Box
            imageSrc={usu}
            title="Master of Computer Science"
            subtitle="Utah State University"
            dates="2026 - Present"
            grad="Expected Graduation: May 2027"
            major="Part Time Student"
            gpa="4.0 GPA"
            content={[]}
          />
          <Box
            imageSrc={grad}
            title="Bachelor of Science"
            subtitle="Utah State University"
            dates="2022 - 2025"
            grad="Summa Cum Laude"
            major="Computer Science Major"
            gpa="3.99 GPA"
            content={[
            "Computer Science Scholar of the Year (2024-25)",
            "ACM-W President (2024-25), Vice President (2023-24)",
            "Miss College of Science (2024-25)",
            "Outstanding Senior (2024-25)",
            "Outstanding Junior (2023-24)"
          ]}
          />
        </div>
      </>
    )
  }
  
  export default Education
  