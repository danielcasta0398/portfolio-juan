import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalThreeContent = ({nameProject, client, previewLink, previewText, lenguajesText, repo}) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  };

  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Panel De Usuarios</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Proyecto </span>:{" "}
              <span className="ft-wt-600 uppercase">{nameProject}</span>
            </div>
            {/* End .col */}

            { client &&  
             <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Themeforest</span>
            </div> }
           
           { repo.status && <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Repositorio </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href={repo.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  https://bit.ly/3QnE4xa
                </a>
              </span>
            </div> }

            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Lenguajes </span>:{" "}
              <span className="ft-wt-600 uppercase">{lenguajesText}</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Ver </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href={previewLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {previewText}
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <Slider {...settings}>
          <div className="slide_item">
            <img src="https://firebasestorage.googleapis.com/v0/b/blogs-7c3e0.appspot.com/o/portfolio%2Fuser1.jpeg?alt=media&token=8953e678-fc99-453c-b90b-ad2abb9920d9" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/project-2.jpg" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/project-1.jpg" alt="slide 1" />
          </div>
        </Slider>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalThreeContent;
