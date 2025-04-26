

import { useState, useEffect } from "react";

function About() {
    const text : string = "I am a";
    const TEXT_OPTIONS : string[] = [
      "Software Engineer.",
      "Computer Scientist.",
      "Embedded Systems Engineer.",
      // "Graduate Student.",
      "Full Stack Web Developer.",
      "Lifelong Learner.",
      "Proud Aggie.",
    ];

    return (
      <>
        <h2 className="section-header">ABOUT</h2>
        <TypingAnimation text={text} words={TEXT_OPTIONS} />
        <ul className="about-text">
          <li>Scholar of the Year 2024-25 for Utah State University’s Computer Science department.</li>
          <li>Associate Software Engineer developing communication systems at L3Harris.</li>
          <li>Former President of USU's ACM-W chapter, where I led a team in initiatives to empower underrepresented groups in Computer Science.</li>
          <li>Former Miss College of Science at USU, where I supported and advocated for the needs of Utah State Science students.</li>
          <li>One of the original members of team at the forefront of the integration of artificial intelligence into USU’s courses.</li>
        </ul>
      </>
    )
  }
//{propA, propB} : {propA:any, propB:any}
  const TypingAnimation = ({text, words, typingSpeed = 100, pauseTime = 1300} : {text:string, words:string[], typingSpeed?:number, pauseTime?:number}) => {
    const [displayedText, setDisplayedText] = useState(text);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [deleting, setDeleting] = useState(false);

    if (words[currentWordIndex][0] == "E") {
      text += "n ";
    } else {
      text += " ";
    }
  
    useEffect(() => {
      const handleTyping = () => {
        const currentWord = words[currentWordIndex];
        if (!deleting) {
          // Typing forward
          setCurrentText((prev) => currentWord.substring(0, prev.length + 1));
          if (currentText === currentWord) {
            setTimeout(() => setDeleting(true), pauseTime);
          }
        } else {
          // Deleting
          setCurrentText((prev) => currentWord.substring(0, prev.length - 1));
          if (currentText === "") {
            setDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      };
  
      const typingTimeout = setTimeout(handleTyping, typingSpeed);
  
      return () => clearTimeout(typingTimeout);
    }, [currentText, deleting, words, currentWordIndex, typingSpeed, pauseTime]);
  
    useEffect(() => {
      setDisplayedText(`${currentText}`);
    }, [currentText]);
  
    return <h3 className="changing-text">{text} 
      <span className="changing-portion">{displayedText}</span>
    </h3>;
  };
  
  export default About
  