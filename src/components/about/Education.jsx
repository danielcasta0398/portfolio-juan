import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "back-end node.js",
    institute: "academlo",
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
    img: `https://verified.cv:3000/v2/ims/image/15626248918796`    
  },

];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
          <img src={val.img} alt="" width='500px'/>
        </li>
      ))}
    </ul>
  );
};

export default Education;
