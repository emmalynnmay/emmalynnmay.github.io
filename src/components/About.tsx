

import { useState, useEffect } from "react";

function About() {
    const text : string = "I am a";
    const TEXT_OPTIONS : string[] = [
      "Software Engineer.",
      "Computer Scientist.",
      "Embedded Systems Engineer.",
      "Graduate Student.",
      "Full Stack Web Developer.",
      // "Lifelong Learner.",
      // "Proud Aggie.",
    ];

    return (
      <>
        <h2 className="section-header">ABOUT</h2>
        <TypingAnimation text={text} words={TEXT_OPTIONS} />
        <div className="about-text">
          <p>I recently graduated with a B.S. in computer science from Utah State University. I'm excited to be continuing my educating through pursuing a master's degree in computer science at Utah State's Salt Lake campus.</p>
          <p>I currently work at L3Harris Technologies as an Associate Software Engineer. In my role, I design, develop, and test mission-critical software for embedded communication systems. I thrive when I can spend my time solving complicated technical problems, and I have enjoyed developing those skills in this role. I have also had the opportunity to strengthen my communication abilities through working on a team of multi-disciplinary engineers.</p>
          <p>I am passionate about increasing advocacy and support for women and other underrepresented individuals in technology. I was able to work towards these objectives while completing my undergraduate degree by serving as President of USU's ACM-W chapter and Miss College of Science 2024-25. I am currently an active member of the SLC chapter of WE3 (Women who Strive for Empowering, Enhancing, and Encouraging Other Women) at L3Harris.</p>
        </div>
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
  