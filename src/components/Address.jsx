import React from "react";

const Address = () => {
  return (
    <>
     {/*  <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>123 Stree New York City ,
        United States Of America 750065.
  </p>*/}
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Email</span>{" "}
        <a href="mailto:steve@mail.com">juancastano0398@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">telefono</span>{" "}
        <a href="Tel: +216 21 184 010">+34641009503</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
