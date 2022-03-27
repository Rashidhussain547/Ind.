import React from "react";
import "./SrvcNav.scss";
import brand from "../../assets/images/newLogo.png";
const SrvcNav = ({ title }) => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-main">
          <a className="navbar-brand nav-logo" href="#!">
            <img src={brand} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navigation">
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
                        <i className="fas fa-arrow-right"></i>Pressure
                        Calibration
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
              <li>
                <a href="#Career">Career</a>
              </li>
              <li>
                <a href="#Contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default SrvcNav;
