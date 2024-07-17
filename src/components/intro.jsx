import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cv from '../assets/resume.pdf'

const Intro = () => {
  const [displayText, setDisplayText] = useState("Gega Jikuridze");

  useEffect(() => {
    const texts = ["Gega Jikuridze", "Frontend Developer"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setDisplayText(texts[index]);
      console.log(index);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro">
      <div className="intro-text">
        <h1>
          Hello, I'm <span>{displayText}</span>
        </h1>
        <p>
          Hi, I'm Gega Jikuridze, a passionate Frontend Developer specializing
          in React.js. I enjoy crafting dynamic, user-friendly web applications
          with a focus on performance and aesthetics. With a strong foundation
          in HTML, CSS, JavaScript, and modern frameworks, I thrive on turning
          ideas into interactive digital experiences. Let's build something
          amazing together.
        </p>

        <a href={cv} download>DOWNLOAD CV</a>
      </div>
      <div className="intro-photo-links">
        <div className="intro-image">
          <div className="intro-img"></div>
        </div>
        <div className="intro-links">
          <a href="https://www.linkedin.com/in/gega-jikuridze-3a7907312/" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
            </a>
          <a href="https://github.com/Gega-Jikuridze" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
            </a>
         <a href="https://www.facebook.com/profile.php?id=61559886003059" target="_blank" rel="noreferrer">
            <i className="bx bxl-facebook-circle"></i>
            </a>
        <a href="https://www.instagram.com/gega.jikuridze/?igsh=cW1yN3o1MjV3amx5" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
