import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Social from "../../components/Social";
import "./Dark.css"

const menuItem = [
  { icon: "fa-home", menuName: "Inicio" },
  { icon: "fa-user", menuName: "SobreMi" },
  { icon: "fa-briefcase", menuName: "Portafolio" },
  { icon: "fa-envelope-open", menuName: "Contacto" },
  //{ icon: "fa-comments", menuName: "Blog" },
];

const HomeDark = () => {
  return (
    <div className="yellow">
      <div className="demo-sticker">
        <a href="#/home-light">
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
        </a>
      </div>
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">            
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>          
                <i className={`fa ${item.icon}`}></i>                         
                {item.menuName === 'SobreMi' ? (<h2>Sobre&nbsp;Mi</h2>) : (<h2>{item.menuName}</h2>)}
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  Sobre <span>Mi</span>
                </h1>
                <span className="title-bg">Resumen</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                mi <span>portafolio</span>
              </h1>
              <span className="title-bg">trabajos</span>
            </div>
            {/* End title */}
            <div
              className="container grid-gallery main-content"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Portfolio />
            </div>
            {/* End grid gallery */}
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                 <span>contacto</span>
              </h1>
              <span className="title-bg">contacto</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row prueba">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                  ¿Que te parece si charlamos?
                  </h3>
                  <p className="open-sans-font mb-4">
                    Si necesitas un programador con sueños, metas y vision. No dudes en pedirme cualquier informacion que necesites.  
                  </p>
                  <Address />
                  {/* End Address */}

                  <Social />
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                
                {/*  Contact Form Ends */}
              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}

          {/* Blog Content Starts */}
          <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>blog</span>
              </h1>
              <span className="title-bg">posts</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {/*  Articles Starts  */}
              <div className="row pb-50">
                <Blog />
              </div>
              {/* Articles Ends */}
            </div>
          </TabPanel>
          {/* Blog Content Ends */}
        </div>
      </Tabs>
    </div>
  );
};

export default HomeDark;
