
import cplusplus from '../assets/skills/cplusplus.png'
import python from '../assets/skills/python.png'
import js from '../assets/skills/js.png'
import java from '../assets/skills/java.png'
import swift from '../assets/skills/swift.webp'
import vue from '../assets/skills/vue.webp'
import react from '../assets/skills/react.webp'
import express from '../assets/skills/express.png'
import flask from '../assets/skills/flask.png'
import django from '../assets/skills/django.png'
import git from '../assets/skills/git.png'
import shell from '../assets/skills/shell-script.png'
import command from '../assets/skills/command_line.png'
import writing from '../assets/skills/technical.png'
import aws from '../assets/skills/aws.png'

const ProgrammingLanguages = ({ languages }) => {
  
  return (
    <div className="languages-container">
      {languages.map((language) => (
        <div key={language.name} className="language-item">
          <img src={language.image} alt={language.name} className="language-icon" />
          <span className="language-name">{language.name}</span>
        </div>
      ))}
    </div>
  );
};

function Skills() {

    return (
      <>
        <h2 className="section-header">SKILLS</h2>

        <h3 className="skill-header">Programming Languages:</h3>
        <ProgrammingLanguages languages={[
          { name: "C++", image: cplusplus },
          { name: "Python", image: python },
          { name: "JavaScript", image: js },
          { name: "Java", image: java },
          { name: "Swift", image: swift },
        ]}/>
        <h3 className="skill-header">Frameworks & Libraries:</h3>
        <ProgrammingLanguages languages={[
          { name: "Vue", image: vue },
          { name: "React", image: react },
          { name: "Express", image: express },
          { name: "Flask", image: flask },
          { name: "Django", image: django },
        ]}/>
        <h3 className="skill-header">Other:</h3>
        <ProgrammingLanguages languages={[
          { name: "Git", image: git },
          { name: "Shell Scripting", image: shell },
          { name: "Command Line Interface Navigation", image: command },
          { name: "Technical Writing", image: writing },
          { name: "Application Deployment with AWS", image: aws },
        ]}/>
      </>
    )
  }
  
  export default Skills
  