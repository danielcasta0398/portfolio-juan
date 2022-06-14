import React from "react";

const ModalOneContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>seendgo</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projecto </span>:{" "}
              <span className="ft-wt-600 uppercase">Website</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Cliente </span>:{" "}
              <span className="ft-wt-600 uppercase">SeendGo</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Tecnologias </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Javascript, PHP</span>
            </div>
            {/* End .col */}
         

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Ver </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://seendgo.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://seendgo.com
                </a>
              </span>
            </div>
            {/* End .col */}
            <div className="col-12 col-sm-6 mb-2 description">              
              <span className="project-label">Descripcion </span>:{" "}
              <span className="ft-wt-600 uppercase">En este proyecto todo un equipo trabajamos en una plataforma encargada de adminstrar 
              la toma de ordenes por whatsapp gracias a la inteligencia artidial de DialogFlow y gestion de entregas a domicilio</span>
            </div>
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="https://firebasestorage.googleapis.com/v0/b/blogs-7c3e0.appspot.com/o/users%2Fseendgo_img.png?alt=media&token=e82eb7e2-9718-4536-a128-a323bf76c08a" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalOneContent;
