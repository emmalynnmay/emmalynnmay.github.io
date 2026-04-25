
import l3harris from '../assets/l3harris.jpeg'
import intern from '../assets/intern.jpg'
import usu from '../assets/ufc-presentation.jpg'

interface BoxProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  dates: string;
  location: string;
  content: string[];
}

const Box: React.FC<BoxProps> = ({ imageSrc, title, subtitle, dates, location, content }) => {

  return (
    <div className="ed-box">
      <div>
        <h2 className="ed-box-title">{title}</h2>
        <h3 className="ed-box-subtitle">{subtitle}</h3>

        <p className="ed-experience-list">{location}&nbsp;&nbsp; | &nbsp;&nbsp;{dates}</p>
        <br/>

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

function Experience() {

    return (
      <>
        <h2 className="section-header">EXPERIENCE</h2>

        <div className="ed-box-container">
           <Box
            imageSrc={l3harris}
            title="Associate Software Engineer"
            subtitle="L3Harris Technologies"
            dates="June 2025 - present"
            location="Salt Lake City, UT"
            content={["Designed, developed, and tested mission-critical software for advanced embedded communication systems.",
            "Was consistently recognized by management & senior engineers for strong ability to solve complicated technical issues.",
            "Utilized modern C++ to implement capabilities according to complex customer specifications. Adapted to changing requirements quickly.",
            "Validated software functionality and performance on lab hardware in advanced testing environments.",
            "Contributed to an Agile team pioneering AI assisted software development lifecycles in controlled environments.",
            "Worked with complex DevOps pipelines including Jenkins, Docker, Conan, Ivy, Artifactory, Klocwork, Valgrind, Jira, & BitBucket."
          ]}
          />
          <Box
            imageSrc={intern}
            title="Software Engineering Intern"
            subtitle="L3Harris Technologies"
            dates="May 2024 - June 2025"
            location="Salt Lake City, UT"
            content={["1 of 8 selected (from >650 interns throughout L3Harris) to present on internship experience to executive leadership & entire internship program.",
            "Utilized modern C++ in an embedded systems context. Implemented features and resolved software defects for a highly complex communication system.",
            "Improved functionality and comprehensiveness of unit tests for code verification & quality assurance using the GoogleTest testing & mocking framework.",
            "Loaded libraries & installers onto hardware in the lab. Completed formal & informal lab testing and software verification.",
            "Over 12 weeks of the summer, attended 79 meetings, pushed 80 commits of code, ran over 1000 manual & automated tests, merged 14 pull requests into the codebase, and loaded 21 libraries/installers onto lab hardware."]}
          />
          <Box
            imageSrc={usu}
            title="Software Development & Support Specialist"
            subtitle="Utah State University"
            dates="Aug 2022 - May 2024"
            location="Logan, UT"
            content={["Designed and developed software (in React and PHP) to incorporate AI directly into University courses. Presented work done at the UCF Teaching with AI conference in Sept 2023.",
            "Built analytic and automation tools in Node.js & Python including integrations with Instructure Canvas, OpenAI, Monday.com, YouTube, Box, and Anthology's Ally.",
            "Built full-stack web applications in Vue and Express surrounding these tools. Deployed applications using AWS Lambda, Amplify, & DynamoDB."]}
          />
        </div>
      </>
    )
  }
  
  export default Experience
  