import React from "react";
import cardimg1 from "../assets/images/c-1.jpg";
import cardimg2 from "../assets/images/c-2.jpg";
import cardimg3 from "../assets/images/c-3.jpg";
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
                  <h5>Two Different Roads</h5>
                  <p>
                    The web design industry has been undergoingrege tremendous
                    changes to meeteo the demand of users all over to have more
                    access to con...
                  </p>
                  <span>
                    <a href="#!">
                      Read more <i class="fas fa-angle-right"></i>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card col-lg-4 col-md-6 col-sm-12">
                <img src={cardimg2} className="card-img-top" />
                <div className="card-body">
                  <h5>Electric Wave Motion</h5>
                  <p>
                    The web design industry has been undergoingrege tremendous
                    changes to meeteo the demand of users all over to have more
                    access to con...
                  </p>
                  <span>
                    <a href="#!">
                      Read more <i class="fas fa-angle-right"></i>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card col-lg-4 col-md-6 col-sm-12">
                <img src={cardimg3} className="card-img-top" />
                <div className="card-body">
                  <h5>Lasting Impressions</h5>
                  <p>
                    The web design industry has been undergoingrege tremendous
                    changes to meeteo the demand of users all over to have more
                    access to con...
                  </p>
                  <span>
                    <a href="#!">
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
