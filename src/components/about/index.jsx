import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  Informacion Personal
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/blogs-7c3e0.appspot.com/o/users%2FIMG_20220612_134030_2%20(2).jpg?alt=media&token=9857af8c-f00e-4aea-82c1-e8728c563daf"
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              <div className="col-12 mt-1">
                <a className="button" href="https://firebasestorage.googleapis.com/v0/b/blogs-7c3e0.appspot.com/o/portfolio%2FCV%20Juan%20Daniel%20Casta%C3%B1o%20Casta%C3%B1eda%20(2).pdf?alt=media&token=1dd762e2-5298-4d9b-a3eb-d2439da18a1f" download>
                  <span className="button-text">Descargar CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className="separator" />

        {/* Skills Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              Mis habilidades
            </h3>
          </div>
          <Skills />
        </div>
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Educacion
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default index;
