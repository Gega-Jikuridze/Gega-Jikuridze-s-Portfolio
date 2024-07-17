import Skills from "./skills";

const AboutMe = () => {
  return (<>
    <h1 className="about-me-title">About me</h1>
    <div className="about-me container">
      <div className="about-me-skills">
        <Skills />
      </div>

      <div className="about-me-text">
        <h3>Education</h3>
        <p>
          I am Gega Jikuridze, a frontend React developer with skills in HTML,
          CSS, JavaScript (React), WordPress, PHP, Scratch, and Git. I hold a
          bachelor's degree and official certificates from Skillwill Neo
          University in the Programming from Zero and Frontend React courses.
        </p>
        <h3>Experience</h3>
        <p>
          Since 2023, I have been working as a trainer, teaching HTML, CSS,
          WordPress, Scratch, PHP, and Git. I provide mentorship and support to
          students, fostering their growth and understanding of programming
          concepts.
        </p>
        <p>
          In 2024, I started developing frontend solutions for a startup
          project. I collaborate with teams to ensure seamless integration and
          functionality, leveraging my expertise to deliver high-quality web
          applications.
        </p>
      </div>
    </div>
    </>
  );
};

export default AboutMe;
