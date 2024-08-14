
function NavHeader() {

  //TODO: add links!
  //TODO: sticky header

  return (
    <>
      <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">ELM</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">About</a></li>
                <li><a href="/">Experience</a></li>
                <li><a href="/">Education & Skills</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Resume</a></li>
            </ul>
        </nav>
    </>
  )
}

export default NavHeader
