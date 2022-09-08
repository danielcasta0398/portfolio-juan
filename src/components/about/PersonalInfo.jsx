import React from "react";

const personalInfoContent = [
  { meta: "nombres", metaInfo: "Juan Daniel" },
  { meta: "apellidos", metaInfo: "Castaño Castañeda" },
  { meta: "Edad", metaInfo: "23 Años" },
  { meta: "Telefono", metaInfo: "+34641009503" },
  { meta: "Email", metaInfo: "juancastano0398@gmail.com" }, 
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block info${i}`}>
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
