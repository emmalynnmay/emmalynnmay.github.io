import headshot from '../assets/headshot.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.webp'
import gmail from '../assets/gmail.webp'
import resume from '../assets/Resume.pdf';

function Intro() {

    return (
      <>
        <div className="container">
          <div className="text-container">
            <h1 className="title">Emma Lynn May</h1>
            <h2 className="tagline">Software Engineering Portfolio</h2>

            <div className="image-button-group">
              <div className="image-container">

                <a href="https://github.com/emmalynnmay" target="_blank">
                  <img src={github} alt="GitHub's logo." className="clickable-image" />
                </a>
                <a  href="https://www.linkedin.com/in/emma-lynn-may-3a09401b2/" target="_blank">
                  <img src={linkedin} alt="LinkedIn's logo." className="clickable-image" />
                </a>
                <a href="mailto:emmalynnmayy@gmail.com">
                  <img src={gmail} alt="Gmail's logo." className="clickable-image" />
                </a>

              </div>
              <a href={resume} rel="noopener noreferrer" target="_blank">
                <button className="action-button" value="Resume">
                Resume
                </button>
              </a>
            </div>

          </div>
          <div className="image">
            <img className="headshot" src={headshot} alt="Professional photo of Emma Lynn May." />
          </div>
        </div>
      </>
    )
  }
  
  export default Intro
  