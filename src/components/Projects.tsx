//Projects
  //RF Spectrum Allocation
  //Data science final project
  //Rock paper robots
  //Drone cones

import rf from '../assets/spectrum-allocation.png'
import youtube from '../assets/youtube-data.png'
import robots from '../assets/rock-paper-robos.png'
import drone from '../assets/drone.png'
import drone2 from '../assets/drone2.png'

interface BoxProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  content: [string];
  projectLink: string;
}

const Box: React.FC<BoxProps> = ({ imageSrc, title, subtitle, content, projectLink }) => {

  return (
    <div className="box">
      <img src={imageSrc} alt={title} className="box-image" />
      <h2 className="box-title">{title}</h2>
      <h3 className="box-subtitle">{subtitle}</h3>
      <a className="project-link" href={projectLink} target="_blank">Source Code</a>
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

function Projects() {

    return (
      <>
        <h2 className="section-header">PROJECTS</h2>

        <div className="box-container">
          <Box
            imageSrc={drone2}
            title="Drone Cones"
            subtitle="Full Stack Web Application"
            content={["Vue, Django, & Postgres",
            "As a customer, place an order of ice cream to be delivered by drone.",
            "As a drone owner, view and manage drone delivery activity.",
            "As an administrator, view and manage inventory, sales, revenue, prices, and account activity.",
            "Final project for Software Engineering at USU",
            "With Jack Agren, Evan Anderson, Boston Musgrave, Benjamin Ricks, & Skyler Oakeson"
            ]}
            projectLink="https://github.com/emmalynnmay/drone-cones"
          />
          <Box
            imageSrc={rf}
            title="Radio Frequency Spectrum Allocation"
            subtitle="Command Line Interface Simulation"
            content={["Python",
            "Simulation of radio frequency allocation in wireless communication networks using graph theory",
            "Uses game theory principles to evaluate system performance",
            "Assesses whether the allocation strategy used in the paper Spectrum Allocation of Cognitive Radio Based on Game Theory (Shu, Qiang, et al.) leads to optimal and stable outcomes",
            "Final project for Multi Agent Systems at USU",
            "With Jonah Harmon & Calvin Riley"
            ]}
            projectLink='https://github.com/emmalynnmay/rf-spectrum-allocation'
          />
        </div>

        <div className="box-container">
          <Box
            imageSrc={youtube}
            title="YouTube Data Analysis"
            subtitle="Command Line Script & Jupyter Notebook Data Analysis"
            content={["Python",
            "Analysis of data pulled from YouTube",
            "Script that pulls data on 1000+ videos using the YouTube API",
            "Exploration of trends in comment sections & descriptions, and video success using basic data science principles",
            "Final project for Data Science in Practice at USU",
            "With Ann Marie Humble"
            ]}
            projectLink='https://github.com/emmalynnmay/youtube-data-analyses'
          />
          <Box
            imageSrc={robots}
            title="Rock Paper Robots"
            subtitle="Full Stack Web Application"
            content={["React, Express, & Postgres",
            "Play rock, paper, scissors with a robot adversary to earn RoboCash™! Use your RoboCash™ to purchase items from the store for your collection. Items in your collection are 3D models rendered on the page with WebGL.",
            "Models rendered using three.js",
            "Final project for Modern Web Development at USU",
            ]}
            projectLink='https://github.com/emmalynnmay/rock-paper-robots'
          />
        </div>


      </>
    )
  }
  
  export default Projects
  