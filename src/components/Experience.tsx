import l3harris from '../assets/l3harris.jpeg'

interface BoxProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  content: [string];
}

const Box: React.FC<BoxProps> = ({ imageSrc, title, subtitle, content }) => {

  return (
    <div className="box">
      <img src={imageSrc} alt={title} className="box-image" />
      <h2 className="box-title">{title}</h2>
      <h3 className="box-subtitle">{subtitle}</h3>
      {/* <ul>
        {content.map((item) => {
          return (
            <li>item<li/>
          )
        })}
      </ul> */}
    </div>
  );
};

function Experience() {

    return (
      <>
        <h2 className="section-header">EXPERIENCE</h2>

        <div className="box-container">
          <Box
            imageSrc={l3harris}
            title="L3Harris Technologies"
            subtitle="Software Engineering Intern"
            content={["1 of 8 selected (from >650 interns throughout L3Harris) to present on internship experience to executive leadership & entire internship program.",
            "Utilized modern C++ in an embedded systems context. Implemented features and resolved software defects for a highly complex communication system.",
            "Improved functionality and comprehensiveness of unit tests for code verification & quality assurance using the GoogleTest testing & mocking framework.",
            "Worked with a complex DevOps pipeline including Jira, BitBucket, Jenkins, Docker, Ivy, Artifactory, Klocwork.",
            "Loaded libraries & installers onto hardware in the lab. Completed formal & informal lab testing and software verification."]}
          />
          <Box
            imageSrc="https://via.placeholder.com/150"
            title="Title 2"
            subtitle="Subtitle 2"
            content={["1 of 8 selected (from >650 interns throughout L3Harris) to present on internship experience to executive leadership & entire internship program.",
            "Utilized modern C++ in an embedded systems context. Implemented features and resolved software defects for a highly complex communication system.",
            "Improved functionality and comprehensiveness of unit tests for code verification & quality assurance using the GoogleTest testing & mocking framework.",
            "Worked with a complex DevOps pipeline including Jira, BitBucket, Jenkins, Docker, Ivy, Artifactory, Klocwork.",
            "Loaded libraries & installers onto hardware in the lab. Completed formal & informal lab testing and software verification."]}
          />
        </div>

      </>
    )
  }
  
  export default Experience
  