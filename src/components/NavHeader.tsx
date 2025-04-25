
import resume from '../assets/Resume.pdf';
import logo from '../assets/personal-logo.png';

function NavHeader() {

  return (
    <>
      <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Girl at computer." className="logo" />
            </div>
            
            <ul className="navbar-links">
                <li><a href="#about_tag">About</a></li>
                <li><a href="#experience_tag">Experience</a></li>
                <li><a href="#education_tag">Education</a></li>
                <li><a href="#skills_tag">Skills</a></li>
                <li><a href="#projects_tag">Projects</a></li>
                <li><a href={resume} without="true" rel="noopener noreferrer" target="_blank" trailingicon="picture_as_pdf" label="Resume">Resume</a></li>
            </ul>
        </nav>
    </>
  )
}

export default NavHeader
