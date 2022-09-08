import React from "react";
import "../views/all-home-version/Dark.css"

const SocialShare = [
  {
    iconName: "fa fa-whatsapp",
    link: "https://wa.link/s61h6d",
  },
  { iconName: "fa fa-github", link: "https://github.com/danielcasta0398" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/channel/UCH5A0X7IgZ_DwuIWDEKFMLg",
  },
  { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/juan-daniel-casta%C3%B1o-casta%C3%B1eda-392aa222b/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
