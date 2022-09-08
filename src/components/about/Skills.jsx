import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p100", skillPercent: "100", skillName: "JAVASCRIPT" },
  { skillClass: "p100", skillPercent: "100", skillName: "CSS" },
  { skillClass: "p100", skillPercent: "100", skillName: "REACT" },
  { skillClass: "p100", skillPercent: "100", skillName: "DIALOGFLOW" },
  { skillClass: "p90", skillPercent: "90", skillName: "NODE JS" },  
  { skillClass: "p90", skillPercent: "90", skillName: "MySQL" },
  { skillClass: "p70", skillPercent: "70", skillName: "PHP" },  
  
  
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
