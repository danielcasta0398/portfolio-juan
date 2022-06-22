import React, { useState } from "react";
import Modal from "react-modal";
import Index from "../about/index";

const heroContent = {
  heroImage: "https://firebasestorage.googleapis.com/v0/b/blogs-7c3e0.appspot.com/o/users%2Ffoto_perfil.jpg?alt=media&token=9b3fc084-4ebd-4bc5-ad24-6a6a6cbdd1fd",
  heroMobileImage: "img-mobile",
  heroTitleName: "juan daniel castaño castañeda",
  heroDesignation: "programador full-stack",
  heroDescriptions: `Soy emprendedor, proactivo, honesto, puntual ,trabajador, me gusta el trabajo en equipo con enfoque al resultado, con aprendizaje permanente, me apasiona lo que hago, tengo experiencia y experticia (2 años en manejos de HTML,CSS, JAVASCRIPT Y DIALOGFLOW).`,
  heroBtn: "mas sobre mi",
};


const HeroLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/blogs-7c3e0.appspot.com/o/users%2FIMG_20220612_134030_2%20(2).jpg?alt=media&token=9857af8c-f00e-4aea-82c1-e8728c563daf`}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              Hola soy {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark light"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about green">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default HeroLight;
