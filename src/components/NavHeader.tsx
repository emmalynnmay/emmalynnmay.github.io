
function NavHeader() {

  //TODO: add resume link
  //TODO: sticky header

  return (
    <>
      <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">ELM</a>
            </div>
            <ul className="navbar-links">
                <li><a href="#about_tag">About</a></li>
                <li><a href="#experience_tag">Experience</a></li>
                <li><a href="#education_tag">Education</a></li>
                <li><a href="#skills_tag">Skills</a></li>
                <li><a href="#projects_tag">Projects</a></li>
                <li><a href="/">Resume</a></li>
            </ul>
        </nav>
    </>
  )
}

export default NavHeader
