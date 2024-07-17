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
          <Link>
            <i className="bx bxl-linkedin"></i>
          </Link>
          <Link>
            <i className="bx bxl-github"></i>
          </Link>
          <Link>
            <i className="bx bxl-facebook-circle"></i>
          </Link>
          <Link>
            <i className="bx bxl-instagram"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
