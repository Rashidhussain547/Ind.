import React from "react";
import "./Header.scss";

const AppNavigation = () => {
  return (
    <div className="app-navigation  navbar navbar-expand-md">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapse"
        >
          <span id="btn">
            {" "}
            <i className="fas fa-bars fa-2x"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="collapse">
          <ul className="navbar-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#About-main">About Us</a>
            </li>
            <li className="dropdown">
              <a href="#!">Services</a>
              <div className="dropdown-content animate__animated animate__fadeIn">
                <ul class="headerSubMenu">
                  <li>
                    <a href="./Electric">
                      <i className="fas fa-arrow-right"></i>Electrical
                      Calibration
                    </a>
                  </li>
                  <li>
                    <a href="/Torque">
                      <i className="fas fa-arrow-right"></i>Torque Calibration
                    </a>
                  </li>
                  <li>
                    <a href="/Pressure">
                      <i className="fas fa-arrow-right"></i>Pressure Calibration
                    </a>
                  </li>
                  <li>
                    <a href="/Temp">
                      <i className="fas fa-arrow-right"></i>Temperature
                      Calibration
                    </a>
                  </li>
                  <li>
                    <a href="/Dimension">
                      <i className="fas fa-arrow-right"></i>Dimension
                      Calibration
                    </a>
                  </li>
                  <li>
                    <a href="/NDT">
                      <i className="fas fa-arrow-right"></i>NDT Equipment
                      Calibration
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#Team">Team</a>
            </li>

            <li>
              <a href="#">Clients</a>
            </li>
            {/* <li>
          <a href="#">Accreditation & Certifications</a>
        </li> */}
            <li>
              <a href="#Career">Career</a>
            </li>
            <li>
              <a href="#Contact">Contact Us</a>
            </li>
            {/* <li>
                        <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Do I need a Will?</a>
                        </li>
                        <li>
                            <a href="#">How It Works</a>
                        </li>
                        
                        <li>
                            <a href="#">Our Services</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppNavigation;
