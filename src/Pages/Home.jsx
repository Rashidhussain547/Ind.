import React from "react";
import cardimg1 from "../assets/images/S-1.jpg";
import cardimg2 from "../assets/images/S-2.jpg";
import cardimg3 from "../assets/images/S-6.jpg";
import About from "../Components/About/About";
import { ParallaxProvider } from "react-scroll-parallax";
import "./Home.scss";
import Service from "../Components/Service/Service";
import Team from "../Components/Team/Team";
import Career from "../Components/Career/Career";
import Heading from "../Components/Header/Heading";
const Home = () => {
  return (
    <>
      <div>
        <Heading
          title="Fuel the Productivity"
          para="TECHNICAL CALIBRATION AND STANDARDS LABORATORY
          Reliable Calibration & Certification Services in UAE"
        />
      </div>
      <ParallaxProvider>
        <div className="cards-main container">
          <div className="row">
            <div className="cards col-lg-12 col-sm-12">
              <div className="card col-lg-4 col-md-6 col-sm-12">
                <img src={cardimg1} className="card-img-top" />
                <div className="card-body">
                  <h5>Electrical</h5>
                  <p>
                    Our state-of-art electrical calibration laboratory is
                    designed to cater all your calibration needs for electrical
                    instruments such as Multimeter, Ammeter, Voltmeter, Clamp
                    meter, Insulation tester etc...
                  </p>
                  <span>
                    <a href="/Electric">
                      Read more <i class="fas fa-angle-right"></i>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card col-lg-4 col-md-6 col-sm-12">
                <img src={cardimg2} className="card-img-top" />
                <div className="card-body">
                  <h5>Torque</h5>
                  <p>
                    Technical Calibration Laboratory is an authorized
                    calibration and service center for Snap-on Torque tools.
                    TechCal has a well-developed facility for calibration of
                    torque tools such as Torque Wrenches...
                  </p>
                  <span>
                    <a href="/Torque">
                      Read more <i class="fas fa-angle-right"></i>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card col-lg-4 col-md-6 col-sm-12">
                <img src={cardimg3} className="card-img-top" />
                <div className="card-body">
                  <h5>NDT equipment</h5>
                  <p>
                    Here at TechCal, we are providing calibration services for
                    NDT equipment/tools. In order to carry out non-destructive
                    testing; you also need to ensure that the test equipment
                    like thickness gauges, magnetic yokes etc...
                  </p>
                  <span>
                    <a href="/NDT">
                      Read more <i class="fas fa-angle-right"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <About />
        </div>
        <div>
          <Service />
        </div>
        <div>
          <Team />
        </div>
        <div className="career">
          <Career />
        </div>
      </ParallaxProvider>
    </>
  );
};
export default Home;
