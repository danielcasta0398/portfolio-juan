import React from "react";

const experienceContent = [
  {
    year: "2022",
    position: "HTML, CSS AND JAVASCRIPT",
    compnayName: "Academlo",   
    img: `https://verified.cv:3000/v2/ims/image/45360220408770`
  },
  {
    year: "2022",
    position: "Front-end react",
    compnayName: "academlo",    
    img: `https://verified.cv:3000/v2/ims/image/20674399904656`
  },
  
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
          <img src={val.img} alt="" width='500px'/>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
