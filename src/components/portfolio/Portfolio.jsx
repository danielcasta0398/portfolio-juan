import React, { useState } from "react";
import { Tabs, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
/*import ModalFourContent from "./modal/ModalFourContent";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import ModalSevenContent from "./modal/ModalSevenContent";
import ModalEightContent from "./modal/ModalEightContent";
import ModalNineContent from "./modal/ModalNineContent";*/

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
 /* const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);*/

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  /*function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }
  function toggleModalNine() {
    setIsOpen9(!isOpen9);
  }*/

  return (
    <Tabs>
      {/*<TabList className="portfolio-tab-list">
        <Tab>ALL</Tab>
        <Tab>LOGO</Tab>
        <Tab>VIDEO</Tab>
        <Tab>GRAPHIC DESIGN</Tab>
        <Tab>MOCKUP</Tab>
        </TabList>*/}

      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/blogs-7c3e0.appspot.com/o/portfolio%2FDimensiones%20personalizadas%20895x552%20px.jpeg?alt=media&token=5eb9f632-4b04-47fd-a949-569945d1a104"
                  alt="Portolio"                  
                />
                <div className=" hover-content-wrapper">
                  <span className="content-title">SeendGo</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo} >
                <img src="https://firebasestorage.googleapis.com/v0/b/blogs-7c3e0.appspot.com/o/portfolio%2FLista%20compras.jpeg?alt=media&token=253d22a1-0aa6-41d7-88e5-402f48930a12" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Lista De Compras</span>
                </div>
              </figure>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure onClick={toggleModalThree}>
                <img src="https://firebasestorage.googleapis.com/v0/b/blogs-7c3e0.appspot.com/o/portfolio%2FGestor%20Usuarios.jpeg?alt=media&token=3f871084-47ad-4d95-a243-b2ad6d604dd3" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Panel Usuarios</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThreeContent 
                      nameProject="Panel Usuarios"
                      client={false}
                      previewLink="https://statuesque-dragon-6bbd7f.netlify.app/"
                      previewText="Pagina"
                      lenguajesText={"HTML, CSS, Javascript y React"}
                      repo = {{link :"https://github.com/danielcasta0398/appcreateusers", status: true}}
                    />
                  </div>
                </div>
              </Modal>
              
              {/* End  ModalSixContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure onClick={toggleModalThree}>
                <img src="https://firebasestorage.googleapis.com/v0/b/blogs-7c3e0.appspot.com/o/portfolio%2Fforo.jpeg?alt=media&token=9e80d9d7-daf3-4a2b-bd9d-c674810aeab5" alt="Foro" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Foro</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThreeContent 
                      nameProject="Panel Usuarios"
                      client={false}
                      previewLink="https://statuesque-dragon-6bbd7f.netlify.app/"
                      previewText="Pagina"
                      lenguajesText={"HTML, CSS, Javascript y React"}
                      repo = {{link :"https://github.com/danielcasta0398/appcreateusers", status: true}}
                    />
                  </div>
                </div>
              </Modal>
              
              {/* End  ModalSixContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
        {/* End MOCKUP Project */}
      </div>
    </Tabs>
  );
};

export default Portfolio;
