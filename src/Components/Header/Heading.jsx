import React from "react";
import "./Header.scss";
import AppNavigation from "./Navigation";
import AppImage from "../Imgaes/Images";
import Logo from "../../assets/images/newLogo.png";
const Heading = ({para}) => {
  return (
    <>
      <div className="AppHeaderNavigation">
        <div className="grid-row">
          <div className="col">
            <div className="logo">
              <AppImage img={Logo} className="AppLogo" />
            </div>
          </div>
          <div className="col-9">
            <AppNavigation />
          </div>
          <div className="col"></div>
          <div className="AppHeaderNavigation-heading">
            <h1>We offer <span></span></h1>
            <p>
              {para}
            </p>
            <div>
              <button className="heading-btn">Learn more</button>
              <button className="heading-btn heading-btnT">See more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
