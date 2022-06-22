import React from "react";

const ModalTwoContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Lista de compras</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">Lista de compras</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Repositorio </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://bit.ly/3QnE4xa"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://bit.ly/3QnE4xa
                </a>
              </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Tecnologias</span>:{" "}
              <span className="ft-wt-600 uppercase">
                HTML, CSS Y JavaScript
              </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Ver </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://bit.ly/3xTFUyw"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://bit.ly/3xTFUyw
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <div className="videocontainer">
          <iframe            
            src="https://www.youtube.com/embed/WmUX8V-UsPc?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwoContent;
