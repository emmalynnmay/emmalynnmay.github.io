import './App.css'
import NavHeader from './components/NavHeader'
import Intro from './components/Intro'
import Graphics from './components/Graphics'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <NavHeader/>
      <Intro/>
      <Graphics/>
      <div id="about_tag"><About/></div>
      <div id="experience_tag"><Experience/></div>
      <div id="education_tag"><Education/></div>
      <div id="projects_tag"><Projects/></div>
    </>
  )
}

export default App
