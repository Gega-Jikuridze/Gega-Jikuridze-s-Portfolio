const Skills = () => {
  const skills = [
    {
      skill: "HTML",
      progress: 90,
    },
    {
      skill: "CSS",
      progress: 85,
    },
    {
      skill: "Javascript",
      progress: 80,
    },
    {
      skill: "React.js",
      progress: 70,
    },
    {
      skill: "Wordpress",
      progress: 90,
    },
    {
      skill: "Scratch",
      progress: 91,
    },
    {
      skill: "GitHub",
      progress: 90,
    },
  ];

  return (
    <div className="skills container">
      {skills.map((el, index) => (
        
          <div className="skill" key={index}>
            <h1>{el.skill}</h1>
            <h4>{el.progress}%</h4>
            <div className="progress" style={{width:`${el.progress}%`}}></div>
          </div>
        
      ))}
    </div>
  );
};

export default Skills;
